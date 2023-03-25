# A production-ready Typescript, Node.js boilerplate with Yarn Zero Install

A boiler plate that works out of the box using Yarn PnP (Zero Install).

Scaffhold includes:

- Yarn 3.5.0 with zero install
- TypeScript 5.0
- Eslint: Strict eslint that is production ready that enforces:
  - kebab case for files
  - camel case for variables
  - strong typing with no-explicit-any
  - ...and more (See `.eslintrc`; you can disable things you don't need)
- Prettier
- Husky for pre-commit linting

# Getting-started

Pull the repo, and do `yarn`

Do the following to confirm it is working:

```
yarn launch
```

# VS Code - TypeScript Version

If you are getting TypeScript errors in VS vode but not in the terminal, that is because when using VS Code, you have to set the typescript version to use the workspace's version.

- To do this, open the `index.ts` do `cmd`+`shift`+`p`.
- Select `TypeScript: Select TypeScript Version...` (NOTE: This will only show if you do the previous step with a TypeScript file open)
- Choose `Use Workspace Version`

# Credit

Based on silver-xu's [ts-boilerplate.md](https://gist.github.com/silver-xu/1dcceaa14c4f0253d9637d4811948437).
