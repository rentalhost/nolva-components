import parse, { domToReact, Element, Text } from "html-react-parser";
import { setStyleProp } from "html-react-parser/lib/utilities";
import { createElement, Fragment } from "react";

import type { DOMNode } from "html-react-parser";
import type { JSX, PropsWithChildren, ReactNode } from "react";

type AttributeName = string;

type TransformerCallback = (
  props: PropsWithChildren,
  children: ReactNode,
) => JSX.Element;

type Replacer = [
  tagName: string,
  allowedAttributes?: AttributeName[],
  transformer?: TransformerCallback,
];

const baseAttributes = new Set(["style", "class"]);
const baseTags: string[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",

  // Texts.
  "p",
  "span",
  "div",
  "blockquote",
  "pre",
  "code",
  "strong",
  "em",
  "u",
  "small",

  // Links.
  "figure",
  "figcaption",

  // Lists.
  "ul",
  "ol",
  "li",
  "br",

  // Tables.
  "table",
  "thead",
  "tbody",
  "tfoot",
  "tr",

  // Others.
  "hr",
  "sub",
  "sup",
];

const baseReplacers: Replacer[] = [
  // Links.
  ["a", ["href", "target"]],
  ["img", ["src", "alt"]],
  ["video", ["src"]],
  ["iframe", ["src"]],

  // Tables.
  ["th", ["colspan", "rowspan"]],
  ["td", ["colspan", "rowspan"]],
];

export function transformHTML(input: string, replacers?: Replacer[]) {
  const allReplacers = [
    ...(baseTags.map((tagName) => [tagName]) as Replacer[]),
    ...baseReplacers,
    ...(replacers ?? []),
  ];
  const allowedTags = new Set(allReplacers.map(([tagName]) => tagName));

  function replaceChildren(children: Element["children"]) {
    return children.map((child, childIndex) =>
      child instanceof Text ? (
        child.data
      ) : child instanceof Element ? (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={childIndex}>{domToReact([child], { replace })}</Fragment>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
      ),
    );
  }

  function replace(domNode: DOMNode) {
    if (domNode instanceof Text) {
      return null;
    } else if (domNode instanceof Element) {
      const tagName = domNode.tagName.toLowerCase();

      if (!allowedTags.has(tagName)) {
        return <>{replaceChildren(domNode.children)}</>;
      }

      const tagAttribs: Record<string, string> = {};

      for (const [
        replacerTag,
        replacerAttributes,
        replacerTransformer,
      ] of allReplacers) {
        if (tagName === replacerTag) {
          for (const [attributeName, attributeValue] of Object.entries(
            domNode.attribs,
          )) {
            if (
              baseAttributes.has(attributeName) ||
              replacerAttributes?.includes(attributeName) === true
            ) {
              tagAttribs[attributeName] = attributeValue;
            }
          }

          if (replacerTransformer) {
            return replacerTransformer(
              tagAttribs,
              domNode.children.length === 0
                ? null
                : domToReact(
                    domNode.children.filter(
                      (child) =>
                        child instanceof Element || child instanceof Text,
                    ),
                    { replace },
                  ),
            );
          }
        }
      }

      if (typeof tagAttribs["style"] === "string") {
        setStyleProp(tagAttribs["style"], tagAttribs);
      }

      if (typeof tagAttribs["class"] === "string") {
        tagAttribs["className"] = tagAttribs["class"];
        delete tagAttribs["class"];
      }

      return createElement(
        domNode.tagName,
        tagAttribs,
        domNode.children.length === 0
          ? null
          : replaceChildren(domNode.children),
      );
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  return parse(input, { replace });
}
