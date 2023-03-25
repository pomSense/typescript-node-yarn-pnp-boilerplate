# A Simple Typescript, Node.js boilerplate with Yarn Zero Install

Scaffhold includes:

- Yarn 3.5.0 with zero install
- TypeScript
- Eslint
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
