# A production-ready Typescript, Node.js boilerplate with Yarn Zero Install

A production-ready boiler plate that works out of the box using Yarn PnP (Zero Install). This project has strong commit and lint enforcement. You can configure any of this to cater to your project, though the default setup is recommended to drive both an efficient dev process and enforce code quality.

Scaffhold includes:

- Yarn 3.5.0 with zero install
- TypeScript 5.0
- Eslint: Strict eslint that is production ready that enforces:
  - kebab case for files
  - camel case for variables
  - strong typing with no-explicit-any
  - ...and more (See `.eslintrc`; you can disable things you don't need)
- Prettier
- Husky for pre-commit linting enforcement
- C-Spell for spell check on commits

# Getting-started

Pull the repo, and do `yarn`

Do the following to confirm it is working:

```
yarn install
```

```
yarn husky install
```

```
yarn launch
```

# Yarn

When running a yarn command, if you get issues, fail-safe is always to just use `yarn run {your command}`

# Commit rules

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

# VS Code - TypeScript Version

If you are getting TypeScript errors in VS vode but not in the terminal, that is because when using VS Code, you have to set the typescript version to use the workspace's version.

- To do this, open the `index.ts` do `cmd`+`shift`+`p`.
- Select `TypeScript: Select TypeScript Version...` (NOTE: This will only show if you do the previous step with a TypeScript file open)
- Choose `Use Workspace Version`

# Spell check

This project uses spell check. Configuration lives in `cspell.yml`.

You can add words that are specific to your project in `cspell-project-words.txt`.

# Credit

Based on silver-xu's [ts-boilerplate.md](https://gist.github.com/silver-xu/1dcceaa14c4f0253d9637d4811948437).
