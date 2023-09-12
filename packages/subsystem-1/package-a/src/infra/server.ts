import { buildSubgraphSchema } from '@apollo/subgraph'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer, CreateHandlerOptions, gql } from 'apollo-server-lambda'
import { APIGatewayEvent } from 'aws-lambda'
import express from 'express'
import { applyMiddleware } from 'graphql-middleware'

// import { graphqlUploadExpress } from 'graphql-upload'
import { permissions } from './graphql/permission'
import { resolvers } from './graphql/resolvers'
import { Schema } from './graphql/schema'

export interface Context {
  headers: { authorization: string; Authorization: string }
  metadata: { userID: string; workspaceID: string }
  context: unknown
  event: APIGatewayEvent
}

const typeDefs = gql`
  ${Schema}
`
const rawSchema = buildSubgraphSchema([{ typeDefs, resolvers }])
// Apply permissions middleware with applyMiddleware
// Giving any schema (instance of GraphQLSchema)

const schema = applyMiddleware(rawSchema, permissions)

const server = new ApolloServer({
  schema,
  introspection: process.env.ENV_STAGE === 'dev',
  context: ({ event }) => {
    const { userID = '', workspaceID = '' } = event?.requestContext?.authorizer || {}
    // add the user and workspace details to the context
    return {
      headers: event.headers,
      event,
      metadata: { userID, workspaceID },
      authorizer: event?.requestContext?.authorizer
    }
  },

  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({ settings: { 'schema.polling.enable': false } })]
})

/**
 * apollo-server-lambda uses apollo-server-express under the hood
 * {@link https://github.com/apollographql/apollo-server/blob/main/packages/apollo-server-lambda/src/ApolloServer.ts}
 */
const options: CreateHandlerOptions = {
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*',
      methods: 'POST',
      allowedHeaders: ['Content-Type', 'Origin', 'Accept']
    }
  },
  expressAppFromMiddleware(middleware) {
    const app = express()
    // app.use(graphqlUploadExpress())
    app.use(middleware)
    return app
  }
}

exports.handler = server.createHandler(options)
