import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        game: "readonly",
        Hooks: "readonly",
        foundry: "readonly",
        ui: "readonly",
        require: "readonly",
        exports: "readonly",
        process: "readonly",
      }
    }
  },
  pluginJs.configs.recommended,
];