// @ts-check

import { fixupPluginRules } from "@eslint/compat";
import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsdocPlugin from "eslint-plugin-jsdoc";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unicornPlugin from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    plugins: {
      ["@typescript-eslint"]: tseslint.plugin,
      ["jsdoc"]: jsdocPlugin,
      ["react"]: fixupPluginRules(reactPlugin),
      ["simple-import-sort"]: simpleImportSortPlugin,
      ["import"]: fixupPluginRules(importPlugin),
      ["unicorn"]: unicornPlugin,
    },
  },
  {
    ignores: [
      ".next/*",
      "node_modules/*",
      "next-env.d.ts",
      /* Configs */
      "next.config.mjs",
      "eslint.config.mjs",
      "typed-scss-modules.config.ts",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.configs.strict,
  perfectionistPlugin.configs["recommended-alphabetical"],
  jsdocPlugin.configs["flat/recommended-typescript-error"],
  {
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    rules: {
      curly: ["error", "all"],
      eqeqeq: [
        "error",
        "always",
        {
          null: "never",
        },
      ],
      "@typescript-eslint/no-unnecessary-type-parameters": "off",
      "logical-assignment-operators": "error",
      "no-else-return": "error",
      "no-mixed-operators": "error",
      "no-console": "error",
      "no-process-exit": "error",
      "no-fallthrough": ["error", { commentPattern: ".*intentional fallthrough.*" }],
      "no-implicit-coercion": ["error", { boolean: false }],
      "no-lonely-if": "error",
      "no-unreachable-loop": "error",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-var": "error",
      "no-void": ["error", { allowAsStatement: true }],
      "object-shorthand": "error",
      "one-var": ["error", "never"],
      "operator-assignment": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-rest-params": "error",
      "prefer-template": "error",
      radix: "error",
      "import/consistent-type-specifier-style": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-absolute-path": "error",
      "import/no-amd": "error",
      "import/no-default-export": "error",
      "import/no-duplicates": "error",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
          peerDependencies: true,
          optionalDependencies: false,
        },
      ],
      "import/no-mutable-exports": "error",
      "import/no-named-default": "error",
      "import/no-self-import": "error",
      "simple-import-sort/imports": "off",
      "jsdoc/informative-docs": "error",
      "unicorn/no-lonely-if": "error",
      "unicorn/no-typeof-undefined": "error",
      "unicorn/no-useless-spread": "error",
      "unicorn/prefer-node-protocol": "error",
      "unicorn/prefer-regexp-test": "error",
      "unicorn/prefer-string-replace-all": "error",
    },
  },
  {
    files: ["src/app/**/{page,layout,not-found,robots,sitemap}.tsx"],
    rules: {
      "import/no-default-export": "off",
    },
  }
);
