module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "linebreak-style": "off",
    "object-curly-spacing": "off",
    "require-jsdoc": "off",
    "prefer-const": "error",
    "no-await-in-loop": "warn",
    "no-use-before-define": ["error", {
      "functions": false,
      "classes": true,
      "variables": true,
      "allowNamedExports": true,
    }],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "max-statements-per-line": ["error", { "max": 1 }],
    "max-params": ["error", 4],
    "@typescript-eslint/no-unused-vars": "error",
    "max-lines-per-function": ["error", 75],
    "no-param-reassign": "error",
  },
};
