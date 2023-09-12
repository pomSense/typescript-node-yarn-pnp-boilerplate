import { DocumentNode, GraphQLScalarType } from 'graphql'

import { createAPIKeyController } from '../../command/auth/auth-controller'
import { Context } from '../server'
import { getAPIKeyController } from '../../query/api-key-controller'

type Input<T> = { input: T }

const Void = new GraphQLScalarType({
  name: 'Void'
})

/**
 * @resolvers are a thin layer which lead to a controller
 */
export const resolvers = {
  Query: {
    getAPIKey: (_: DocumentNode, { input }: Input<{ constraint: string }>, context: Context) => {
      return getAPIKeyController()
    }
  },
  // Upload: GraphQLUpload as any,
  Void: Void,
  Mutation: {
    createAPIKey: (_: DocumentNode, { input }: Input<ActivateMembershipDTO>, context: Context) => {
      const metadata = context.metadata
      return createAPIKeyController({ ...input, metadata })
    }
  }
}
