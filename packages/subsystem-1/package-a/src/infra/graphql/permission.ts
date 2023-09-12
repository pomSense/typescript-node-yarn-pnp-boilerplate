import { allow, chain, shield } from 'graphql-shield'

import { shieldRules } from './rules'

/**
 * This is the permissions schema with using Graphql Schema {@link https://www.npmjs.com/package/graphql-shield}
 * GraphQL Server permissions as another layer of abstraction!
 * GraphQL Shield helps you create a permission layer for your application.
 */
export const permissions = shield({
  Query: {
    getAPIKey: allow
  },
  Mutation: {
    createAPIKey: allow
  }
})
