module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json",
    // "tsconfigRootDir": ".",
    "ecmaFeatures": {
      "jsx": true, // Allows for the parsing of JSX
    },
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  "rules": {
    /**
     * @description rules of eslint official
     */
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "none"
      }
    ],
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
     * "import/named" temporary disable.
     */
    "import/named": "off",
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    "import/export": "off",
    "import/prefer-default-export": "off", // Allow single Named-export
    "no-unused-expressions": [
      "warn",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ], // https://eslint.org/docs/rules/no-unused-expressions
    /**
     * @description rules of @typescript-eslint
     */
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/prefer-interface": "off", // also want to use "type"
    "@typescript-eslint/explicit-function-return-type": "off", // annoying to force return type
    /**
     * @description rules of eslint-plugin-react
     */
    // "react/jsx-filename-extension": ["warn", {
    //   "extensions": [".jsx", ".tsx"]
    // }], // also want to use with ".tsx"
    // "react/prop-types": "off", // Is this incompatible with TS props type?
    /**
     * @description rules of eslint-plugin-react-hooks
     */
    // "react-hooks/rules-of-hooks": "error",
    /**
     * @description rules of eslint-plugin-prettier
     */
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "tabWidth": 2,
        "semi": false,
        "useTabs": false,
        "singleQuote": true,
        "trailingComma": "none",
        "bracketSpacing": false,
        "jsxBracketSameLine": false,
        "proseWrap": "always"
      }
    ]
  }
}
