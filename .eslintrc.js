module.exports = {
  globals: {
    localStorage: true,
    sessionStorage: true,
    alert: true,
    window: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/no-extraneous-dependencies": [
      2,
      { devDependencies: ["**/test.tsx", "**/test.ts"] },
    ],
    "@typescript-eslint/indent": ["error", 4, { SwitchCase: 1 }],
    indent: ["error", 4, { SwitchCase: 1 }],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    semi: ["error", "never"],
    "import/export": 0,
    "import/extensions": 0,
    "prettier/prettier": "error",
    "@typescript-eslint/member-delimiter-style": 0,
    "class-methods-use-this": 0,
    "react/state-in-constructor": 0,
    "no-useless-constructor": 0,
    "import/prefer-default-export": 0,
    "max-classes-per-file": 0,
    "consistent-return": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-array-index-key": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-curly-newline": 0,
    indent: 0,
    "@typescript-eslint/indent": 0,
    "import/no-cycle": 0,
  },
};
