{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "project": ["./tsconfig.json"]
  },
  "env": {
    "browser": false,
    "es6": true,
    "node": true
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parserOptions": {
        "project": ["./tsconfig.json"]
      }
    }
  ],
  "plugins": ["@typescript-eslint/eslint-plugin", "simple-import-sort", "unicorn", "unused-imports"],
  "extends": [
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-submodule-imports": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/camelcase": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "no-console": "off",
    "sort-keys": "off",
    "sort-imports": "off",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ],
    "unicorn/filename-case": [
      "error",
      {
        "case": "kebabCase"
      }
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ]
  }
}
