import js from "@eslint/js";

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly"
      }
    },
    env: {
      node: true
    },
    rules: {
      "no-undef": "error"
    }
  }
];