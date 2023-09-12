export const Schema = `
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])


  type CreateAPIKeyInput{
    accountID: String!
  }


  extend type Mutation {
    createAPIKey(input: CreateAPIKeyInput!): APIKey
  
  }

  type APIKey {
    apiKey: String
  }
  
  extend type Query {
    getAPIKey(): String
  }


  `
