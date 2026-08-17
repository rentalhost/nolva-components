import { ComponentProps, Dispatch, FormHTMLAttributes, JSX, PropsWithChildren, ReactElement, ReactNode, SetStateAction } from "react";
import { JSX as JSX$1 } from "react/jsx-runtime";
import { Arrayable } from "@rheactor/rheactor-core";
import { IconType } from "@rheactor/rheactor-font-awesome";
//#region src/components/Analytics/Analytics/AnalyticsViewport.d.ts
interface Properties$22 {
  /** The name of the event to send. */
  eventName: string;
  /** The parameters to send with the event. */
  eventParams?: Record<string, unknown>;
}
declare function AnalyticsViewport({ eventName, eventParams }: Properties$22): import("react").JSX.Element;
//#endregion
//#region src/services/hooks/useInViewport.d.ts
type Threshold = number | `${number}px`;
declare function useInViewport(
/**
 * The threshold to consider the element visible. Can be a number (percentual) or a pixel value.
 *
 * Defaults to `25px`.
 */
threshold?: Threshold,
/**
 * Whether to consider the element visible after it leaves the viewport.
 *
 * Defaults to `false`.
 */
shouldConsiderVisibleAfterLeavingViewport?: boolean): {
  readonly ref: (element: Element | null | undefined) => void;
  readonly visible: boolean;
  readonly disconnect: () => void;
};
//#endregion
//#region src/components/Animate/Animate/Animate.d.ts
interface Properties$21 extends PropsWithChildren {
  /**
   * Effect to apply.
   *
   * Defaults to none (respects `fadeEffect`).
   */
  effect?: "fade" | "none" | "slideDown" | "slideLeft" | "slideRight" | "slideUp" | "zoomIn" | "zoomOut";
  /**
   * Animation duration.
   *
   * Defaults to `400` (0.4s).
   */
  duration?: number;
  /**
   * Animation distance.
   *
   * Defaults to `50%`.
   */
  distance?: string;
  /**
   * Animation easing.
   *
   * Defaults to `easeInOut`.
   */
  easing?: "ease-in-out" | "ease-in" | "ease-out" | "ease" | "linear";
  /**
   * Whether to apply the animation always.
   *
   * Defaults to `false`.
   */
  always?: boolean;
  /**
   * Animation threshold.
   *
   * Defaults to `25px`.
   */
  threshold?: Threshold;
  /** Container class name. */
  className?: string;
  /** Container children. */
  children?: ReactNode;
  /** Callback fired when the animation starts. */
  onAnimate?(this: void): void;
}
declare function Animate({ effect, duration, distance, easing, always, threshold, className, children, onAnimate }: Properties$21): import("react").JSX.Element;
//#endregion
//#region src/components/Form/Button/Button.d.ts
interface Properties$20 extends ComponentProps<"button"> {
  /**
   * The type of the button.
   *
   * Defaults to "button".
   */
  type?: ComponentProps<"button">["type"];
  /**
   * Specifies the fill style of the button. Can be "outline", "solid", or "transparent".
   *
   * Defaults to "solid".
   */
  fill?: "outline" | "solid" | "transparent";
  /** The component type. */
  __internalComponentType?: string;
  /** If true, the button will render as a child element. */
  asChild?: boolean;
}
declare function Button({ type, disabled, fill, className, asChild, __internalComponentType, children, ...properties }: Properties$20): JSX$1.Element;
//#endregion
//#region src/components/Form/Form/Form.d.ts
declare const Form: ({ onFocus, className, ...properties }: ComponentProps<"form">) => import("react").JSX.Element;
//#endregion
//#region src/components/Form/Input/Input.d.ts
type InputCheckbox = "checkbox";
type InputColor = "color";
type InputDate = "date" | "datetime-local" | "month" | "time" | "week";
type InputFile = "file";
type InputHidden = "hidden";
type InputNumber = "number";
type InputRadio = "radio";
type InputRange = "range";
type InputText = "email" | "password" | "search" | "tel" | "text" | "url";
interface InputTextProperties extends ComponentProps<"input"> {
  /** Input type. */
  type?: InputCheckbox | InputColor | InputDate | InputFile | InputHidden | InputNumber | InputRadio | InputRange | InputText;
}
type Properties$19 = InputTextProperties;
declare function Input({ type, placeholder, className, ...properties }: Properties$19): import("react").JSX.Element;
//#endregion
//#region src/components/Form/Label/Label.d.ts
interface Properties$18 extends PropsWithChildren, Pick<ComponentProps<"label">, "ref"> {
  /** The title of the label. */
  title?: ReactNode;
  /**
   * The primary placeholder of the children input.
   *
   * - If `true`, the primary placeholder will be the title.
   * - If `string`, the primary placeholder will be the string.
   */
  primaryPlaceholder?: string | true;
  /** Whether the label is required. */
  required?: boolean;
  /** The size of the label. */
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** The class name of the title. */
  titleClassName?: string;
  /** The class name of the label. */
  className?: string;
  /** The content of the label. */
  children: ReactNode;
  /** The class name of the children. */
  childrenClassName?: string;
}
declare function Label({ ref, title, primaryPlaceholder, required, size, titleClassName, className, children, childrenClassName }: Properties$18): import("react").JSX.Element;
//#endregion
//#region src/components/Form/Textarea/Textarea.d.ts
declare function Textarea({ placeholder, className, ...properties }: ComponentProps<"textarea">): import("react").JSX.Element;
//#endregion
//#region src/components/Form/Select/Select.d.ts
interface Properties$17 extends ComponentProps<"select"> {
  /** The placeholder of the select. */
  placeholder?: string;
  /**
   * The options of the select.
   *
   * A `null` entry forces an empty separator (`<optgroup>`) between the surrounding options, even
   * when the adjacent groups are the same.
   */
  options: Array<OptionItem | null>;
  /** The className of the option. */
  className?: string;
  /** The className of the arrow. */
  arrowClassName?: string;
}
interface OptionItem {
  /** The title of the option. */
  title?: string;
  /**
   * The value of the option.
   *
   * Defaults to same as `title`.
   */
  value?: string;
  /** The className of the option. */
  className?: string;
  /**
   * The group this option belongs to. Options sharing the same group are rendered together inside a
   * single `<optgroup>`, respecting the order of their first appearance. When omitted, the option
   * is rendered at the root of the `<select>`.
   */
  group?: string;
}
declare function Select({ placeholder, options, className, arrowClassName, ...properties }: Properties$17): import("react").JSX.Element;
//#endregion
//#region src/components/Generic/BackTopButton/BackTopButton.d.ts
interface Properties$16 {
  /**
   * The title of the button.
   *
   * Defaults to "Back to Top".
   */
  title?: string;
  /** The class name of the button. */
  className?: string;
}
declare function BackTopButton({ title, className }: Properties$16): import("react").JSX.Element;
//#endregion
//#region src/components/Generic/InputSearch/InputSearch.d.ts
interface Properties$15 {
  /** The class name that will be appended to the container element. */
  className?: string;
  /** The URL that the form data will be submitted to. */
  formAction?: FormHTMLAttributes<HTMLFormElement>["action"];
  /**
   * The method in which the form data will be submitted.
   *
   * Defaults to `get`.
   */
  formMethod?: FormHTMLAttributes<HTMLFormElement>["method"];
  /** The class name that will be appended to the search icon. */
  iconClassName?: string;
  /** The name of the search input. */
  inputName?: string;
  /** The default value of the search input. */
  inputDefaultValue?: string;
  /** The class name that will be appended to the search input. */
  inputClassName?: string;
  /** The placeholder text of the search input. */
  inputPlaceholder?: string;
  /** The class name that will be appended to the search button. */
  buttonClassName?: string;
  /** The text of the search button. */
  buttonText?: ReactNode;
}
declare function InputSearch({ className, formAction, formMethod, iconClassName, inputName, inputDefaultValue, inputClassName, inputPlaceholder, buttonClassName, buttonText }: Properties$15): import("react").JSX.Element;
//#endregion
//#region src/components/Generic/Ready/Ready.d.ts
declare function Ready({ children }: PropsWithChildren): Iterable<ReactNode> | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | (string | number | bigint | boolean | Iterable<ReactNode> | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").ReactPortal | null | undefined);
//#endregion
//#region src/components/Generic/TextClamp/TextClamp.d.ts
interface Properties$14 extends PropsWithChildren {
  /** Number of lines. */
  lines: number;
  /** Class name. */
  className?: string;
  /** Children. */
  children?: ReactNode;
}
declare function TextClamp({ lines, children, className }: Properties$14): import("react").JSX.Element;
//#endregion
//#region src/components/Header/Header/Header.d.ts
interface Properties$13 extends PropsWithChildren {
  /**
   * Defines the header positioning behavior.
   *
   * - `static`: positioned according to normal document flow, no special behavior.
   * - `relative`: follows normal flow, supports z-index, not sticky or fixed.
   * - `absolute`: removed from flow, positioned relative to nearest positioned ancestor.
   * - `fixed`: fixed to top of viewport, overlays content, removed from flow.
   * - `sticky`: sticks to top during scroll, retains space in layout, only works in scrollable
   *   containers.
   *
   * Elements with `relative` or `absolute` will never trigger `stuck:` state.
   *
   * Default is `relative`.
   */
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
  /**
   * Detect stick after this position.
   *
   * Defaults to `0`.
   */
  stickAfter?: number;
  /** Custom class name. */
  className?: string;
  /** Content of the header. */
  children?: ReactNode;
}
declare function Header({ position, stickAfter, className, children }: Properties$13): import("react").JSX.Element;
//#endregion
//#region src/components/Primitive/Container/Container.d.ts
interface Properties$12 extends PropsWithChildren {
  /**
   * Determines the horizontal padding of the container.
   *
   * Defaults to `4` (1rem).
   */
  paddingX?: number;
  /**
   * Determines if the container is fluid.
   *
   * It means that the container will take the full width of the screen.
   */
  fluid?: boolean;
  /** Container class name. */
  className?: string;
  /** Container children. */
  children?: ReactNode;
}
declare function Container({ paddingX, fluid, className, children }: Properties$12): import("react").JSX.Element;
//#endregion
//#region src/components/Header/HeaderContainer/HeaderContainer.d.ts
declare function HeaderContainer({ className, ...properties }: ComponentProps<typeof Container>): import("react").JSX.Element;
//#endregion
//#region src/components/Header/HeaderNav/HeaderNav.d.ts
interface Properties$11 extends PropsWithChildren {
  /** The class name of the nav element. */
  navClassName?: string;
  /** The class name of the component. */
  listClassName?: string;
  /** The children of the component. Typically a list of menu items. */
  children?: ReactNode;
  /**
   * The icon to use for open the menu button.
   *
   * Defaults to `<FaBars />`.
   */
  icon?: IconType;
  /** The class name of the icon element. */
  iconClassName?: string;
  /**
   * The icon to use for close the menu button.
   *
   * Defaults to `<FaXmark />`.
   */
  closedIcon?: IconType;
  /** The class name of the icon element when the menu is closed. */
  closedIconClassName?: string;
  /**
   * The children of the opener icon.
   *
   * @param closeHandler A function to close the menu.
   */
  openedModalContent(this: void, closeHandler: () => void): ReactElement;
}
declare function HeaderNav({ navClassName, listClassName, children, icon, iconClassName, closedIcon, closedIconClassName, openedModalContent }: Properties$11): false | import("react").JSX.Element;
//#endregion
//#region src/components/Pagination/Pagination/Pagination.d.ts
interface Properties$10 {
  /** The current page. */
  current: number;
  /** The total number of pages. */
  total: number;
  /**
   * The maximum number of visible pages.
   *
   * Defaults to `undefined` (unlimited).
   */
  visibleCount?: number;
  /** The number of additional active elements after the current page (not inclusive). */
  spread?: number;
  /**
   * The query string to append to the URL.
   *
   * Defaults to `undefined` (no query string).
   */
  queryString?: string;
  /** The class name of the container element. */
  className?: string;
  /** The class name of each page element. */
  pageClassName?: string;
  /**
   * Whether to show the previous/next buttons.
   *
   * Defaults to `true`.
   */
  previousNext?: boolean;
  /**
   * Whether to show the first/last buttons.
   *
   * Defaults to `true`.
   */
  firstLast?: boolean;
  /**
   * Whether to force the component to render when the total not is greater than one page.
   *
   * Defaults to `false`.
   */
  forceRender?: boolean;
  /** The function to call when a page is clicked. */
  onClick?(this: void, page: number): void;
}
declare function Pagination({ current, total, visibleCount, spread, queryString, className, pageClassName, previousNext, firstLast, forceRender, onClick }: Properties$10): import("react").JSX.Element;
//#endregion
//#region src/components/Primitive/Alert/Alert.d.ts
interface Properties$9 extends PropsWithChildren {
  /** Title of the alert. */
  title: string;
  /** Variant of the alert. */
  variant: "advice" | "critical" | "debug" | "error" | "info" | "success" | "warning";
}
declare function Alert({ title, variant, children }: Properties$9): import("react").JSX.Element;
//#endregion
//#region src/components/Primitive/Section/Section.d.ts
interface Properties$8 extends PropsWithChildren {
  /** Container id to be used as anchor. */
  id?: string;
  /**
   * Container vertical margin.
   *
   * Default to `16` (4rem).
   */
  marginY?: number;
  /**
   * Container top margin.
   *
   * Default to `marginY`.
   */
  marginTop?: number;
  /**
   * Container bottom margin.
   *
   * Default to `marginY`.
   */
  marginBottom?: number;
  /** Container class name. */
  className?: string;
  /** Container children. */
  children?: ReactNode;
}
declare function Section({ id, marginY, marginTop, marginBottom, className, children }: Properties$8): import("react").JSX.Element;
//#endregion
//#region src/components/Print/PrintContainer/PrintContainer.d.ts
interface Properties$7 extends PropsWithChildren {
  /** The content of the container. */
  children: ReactNode;
}
/**
 * This component renders a container with some default styles for printing.
 *
 * It should be used as the outermost component when printing.
 */
declare function PrintContainer({ children }: Properties$7): import("react").JSX.Element;
//#endregion
//#region src/components/Surface/Accordion/Accordion.d.ts
interface Properties$6 extends PropsWithChildren {
  /** The class name of the accordion. */
  className?: string;
  /** The class name of the header. */
  headerClassName?: string;
  /** The title of the accordion. */
  title: ReactNode;
  /** The kind of the title. */
  titleKind?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** The class name of the title. */
  titleClassName?: string;
  /** The class name of the icon. */
  iconClassName?: string;
  /** Whether the accordion is opened initially. */
  opened?: boolean;
  /** The content of the accordion. */
  children: ReactNode;
  /** The class name of the body (children). */
  bodyClassName?: string;
}
declare function Accordion({ className, headerClassName, title, titleKind: TitleKind, titleClassName, iconClassName, opened, bodyClassName, children }: Properties$6): import("react").JSX.Element;
//#endregion
//#region src/services/AnimateService.d.ts
type EasingFunction = (time: number) => number;
declare const easings: {
  linear: (input: number) => number;
  "ease-in": (input: number) => number;
  "ease-out": (input: number) => number;
  "ease-in-out": (input: number) => number;
  ease: (input: number) => number;
};
type Easing = EasingFunction | keyof typeof easings;
//#endregion
//#region src/components/Surface/Counter/Counter.d.ts
interface Properties$5 {
  /**
   * Initial value.
   *
   * Defaults to `0`.
   */
  from?: number;
  /** Final value. */
  to: number;
  /** Thousand separator. Defaults to none. */
  thousandSeparator?: string;
  /** Decimal separator. Defaults to `.` */
  decimalSeparator?: string;
  /**
   * Number of decimals.
   *
   * Defaults to `0`.
   */
  decimals?: number;
  /**
   * Animation duration.
   *
   * Defaults to `1000`.
   */
  duration?: number;
  /**
   * Easing function.
   *
   * Defaults to `"ease-in-out"`.
   */
  easing?: Easing;
  /** Class name. */
  className?: string;
}
declare function Counter({ from, to, thousandSeparator, decimalSeparator, decimals, duration, easing, className }: Properties$5): import("react").JSX.Element;
//#endregion
//#region src/components/Surface/FlipCard/FlipCard.d.ts
interface Properties$4 {
  /** The container class name. */
  className?: string;
  /**
   * The direction-to of the flip.
   *
   * Defaults to `right`.
   */
  flipTo?: "left" | "right";
  /**
   * The axis of the flip.
   *
   * Defaults to `horizontal`.
   */
  axis?: "horizontal" | "vertical";
  /** The content of the front of the flip card. */
  contentFront: ReactNode;
  /** The content of the back of the flip card. */
  contentBack: ReactNode;
  heightController?: "back" | "front";
  /** The class name of the touch icon. */
  touchIconClassName?: string;
  /** The callback when the user flips the card. */
  onFlip?(this: void, viewpoint: "back" | "front"): void;
}
declare function FlipCard({ className, flipTo, axis, contentFront, contentBack, heightController, touchIconClassName, onFlip }: Properties$4): import("react").JSX.Element;
//#endregion
//#region src/components/Surface/Hero/Hero.d.ts
interface Properties$3 extends PropsWithChildren {
  /** The id of the hero. */
  id?: string;
  /** The class name of the hero. */
  className?: string;
  /** The content of the background. */
  backgroundContent: ReactNode;
  /** The content of the hero. */
  children?: ReactNode;
}
declare function Hero({ id, className, backgroundContent, children }: Properties$3): import("react").JSX.Element;
//#endregion
//#region src/components/Surface/Mosaic/Mosaic.d.ts
interface Properties$2 extends PropsWithChildren {
  /**
   * The duration of mosaic items visibility in ms.
   *
   * Defaults to 5000.
   */
  duration?: number;
  /**
   * Whether to shuffle the items.
   *
   * Defaults to false.
   */
  shuffle?: boolean;
  /** The class name of the mosaic. */
  className?: string;
  /** The content of the mosaic. */
  children?: ReactNode;
}
declare function Mosaic({ duration, shuffle, className, children }: Properties$2): JSX.Element;
//#endregion
//#region src/components/Surface/ScrollProgress/ScrollProgress.d.ts
interface Properties$1 extends PropsWithChildren {
  /** The className of the container. */
  className?: string;
  /** The className of the progress bar. */
  progressClassName?: string;
  /** The callback when the progress is updated. */
  onProgress?(this: void, progress: number): void;
  /** The callback when the progress is completed. */
  onCompleted?(this: void): void;
}
declare function ScrollProgress({ className, progressClassName, children, onProgress, onCompleted }: Properties$1): false | import("react").JSX.Element;
//#endregion
//#region src/components/Theme/Theme/Theme.d.ts
interface Properties extends PropsWithChildren {
  /** The variant of the theme. */
  variant: Variant | (string & {});
  /** The content. */
  children: ReactNode;
}
type Variant = VariantSemantic | "amber" | "blue" | "cyan" | "emerald" | "fuchsia" | "gray" | "green" | "indigo" | "lime" | "neutral" | "orange" | "pink" | "purple" | "red" | "rose" | "sky" | "slate" | "stone" | "teal" | "violet" | "yellow" | "zinc";
type VariantSemantic = "danger" | "debug" | "error" | "info" | "success" | "warning";
/** A utility component to change the color of any element based on a variant as theme. */
declare function Theme({ variant, children }: Properties): import("react").JSX.Element;
//#endregion
//#region src/services/EventService.d.ts
type UnloadCallback = () => void;
type Callback = (event: Event, unload: UnloadCallback) => void;
declare function listenEvent(element: EventTarget, eventName: Arrayable<keyof WindowEventMap>, callback: EventListener, shouldImmediate?: boolean): () => void;
declare function listenScroll(element: EventTarget, callback: Callback): () => void;
declare function listenWindowEvent(eventName: Arrayable<keyof WindowEventMap>, callback: EventListener, shouldImmediate?: boolean): () => void;
declare function listenWindowScroll(callback: Callback): () => void;
//#endregion
//#region src/services/hooks/useImmediateReference.d.ts
declare function useImmediateReference<T>(value: T): import("react").RefObject<T>;
//#endregion
//#region src/services/hooks/useLocalStorage.d.ts
declare function useLocalStorage<T>(key: string, defaultValue?: undefined): readonly [T | undefined, Dispatch<SetStateAction<T>>];
//#endregion
//#region src/services/hooks/useReady.d.ts
declare function useReady(): boolean;
//#endregion
//#region src/services/MutationService.d.ts
declare function listenMutationObserver(element: Element | null | undefined, options: MutationObserverInit, callback: MutationCallback, shouldImmediate?: boolean): () => void;
declare function listenResizeObserver(element: Element | null | undefined, options: ResizeObserverOptions, callback: ResizeObserverCallback, shouldImmediate?: boolean): () => void;
//#endregion
//#region src/services/PortalService.d.ts
type Resolve<T> = (value: T) => void;
type Resolver<T> = (resolve: Resolve<T>) => ReactElement;
declare function promisePortal<T>(resolver: Resolver<T>): Promise<void>;
declare function promiseElement(node: ReactElement): Promise<void>;
//#endregion
//#region src/services/UrlService.d.ts
declare function generateQueryString(parameters: Record<string, string | undefined>): string;
//#endregion
export { Accordion, Alert, AnalyticsViewport, Animate, BackTopButton, Button, Container, Counter, FlipCard, Form, Header, HeaderContainer, HeaderNav, Hero, Input, InputSearch, Label, Mosaic, Pagination, PrintContainer, Ready, ScrollProgress, Section, Select, TextClamp, Textarea, Theme, generateQueryString, listenEvent, listenMutationObserver, listenResizeObserver, listenScroll, listenWindowEvent, listenWindowScroll, promiseElement, promisePortal, useImmediateReference, useInViewport, useLocalStorage, useReady };