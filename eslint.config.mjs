import { recommended } from "@rheactor/eslint-config-rheactor";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...recommended,
  globalIgnores(["dist"]),
  { rules: { "@typescript-eslint/naming-convention": "off" } },
]);
