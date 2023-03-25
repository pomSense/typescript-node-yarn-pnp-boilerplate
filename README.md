# A Typescript, Node.js Boilerplate with Yarn Zero Install

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/pomsense.svg?style=social&label=Follow%20%40pomsense)](https://twitter.com/pomsense)

A boilerplate that works out of the box using Yarn PnP (Zero Install). This project has strong commit and lint enforcement. You can configure any of this to cater to your project, though the default setup is recommended to drive both an efficient dev process and enforce code quality.

Features include:

- [Yarn](#yarn) 3.5.0 with zero install
- TypeScript 5.0
- Eslint: Strict eslint that is production ready that enforces:
  - kebab case for files
  - camel case for variables
  - strong typing with no-explicit-any
  - ...and more (See `.eslintrc`; you can disable things you don't need)
- Prettier
- [Husky](#husky) for [pre-commit](#commit-rules) linting enforcement
- [CSpell](#spell-check) for spell check on commits

# Getting-started

Clone the repo by click the [Use this template](https://github.com/pomSense/typescript-node-yarn-pnp-boilerplate/generate) button.

## Clone and run

```
git clone https://github.com/pomSense/typescript-node-yarn-pnp-boilerplate
cd typescript-node-yarn-pnp-boilerplate
yarn
yarn husky install
yarn launch
```

Make sure to setup your [VScode typescript version](#vs-code---typescript-version).

## Husky

Husky helps run spelling and lint checks upon committing. This makes a much more efficient dev process and catches this prior to linting on .github actions (future feature).

## Yarn

When running a yarn command, if you get issues, fail-safe is always to just use `yarn run {your command}`

## Commit rules

Currently, strong commit rules are enforced that are used in top engineering projects. They're located in `.commitlintrc`.

Commits must start with:

```
 "merge",
"build",
"chore",
"ci",
"docs",
"feat",
"fix",
"perf",
"refactor",
"revert",
"style",
"test"
```

## VS Code - TypeScript Version

If you are getting TypeScript errors in VS code but not in the terminal, that is because when using VS Code, you have to set the typescript version to use the workspace's version.

- To do this, open the `index.ts` do `cmd`+`shift`+`p`.
- Select `TypeScript: Select TypeScript Version...` (NOTE: This will only show if you do the previous step with a TypeScript file open)
- Choose `Use Workspace Version`

## Spell check

This project uses spell check. Configuration lives in `cspell.yml`.

You can add words that are specific to your project in `cspell-project-words.txt`.
