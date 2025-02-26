import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { 
      globals: {
        ...globals.browser, // Keep existing browser globals
        Shopify: "readonly",
        throttle: "readonly",
        trapFocus: "readonly",
        removeTrapFocus: "readonly",
        onKeyUpEscape: "readonly",
        CartItems: "readonly",
        debounce: "readonly",
        ON_CHANGE_DEBOUNCE_TIMER: "readonly"
      }
    }
  },
  pluginJs.configs.recommended,
];
