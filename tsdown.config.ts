import { defineConfig } from "tsdown";

// oxlint-disable-next-line import/no-anonymous-default-export
export default defineConfig([
  {
    minify: true,
    entry: "./src/index.ts",
    platform: "browser",
    deps: { neverBundle: true },
    tsconfig: "./tsconfig.build.json",
  },
  {
    minify: true,
    entry: "./src/index.next.ts",
    platform: "browser",
    deps: { neverBundle: true },
    tsconfig: "./tsconfig.build.json",
  },
  {
    minify: true,
    entry: "./src/index-slider.ts",
    platform: "browser",
    deps: { neverBundle: true },
    tsconfig: "./tsconfig.build.json",
  },
  {
    minify: true,
    entry: "./src/index-third.ts",
    platform: "browser",
    deps: { neverBundle: true },
    tsconfig: "./tsconfig.build.json",
  },
  {
    minify: true,
    entry: "./src/index-video.ts",
    platform: "browser",
    deps: { neverBundle: true },
    tsconfig: "./tsconfig.build.json",
  },
  {
    minify: true,
    entry: "./src/index-style.ts",
    platform: "browser",
    deps: { neverBundle: true },
    tsconfig: "./tsconfig.build.json",
  },
  {
    minify: true,
    entry: "./src/index-dom.ts",
    platform: "browser",
    deps: { neverBundle: true },
    tsconfig: "./tsconfig.build.json",
  },
]);
