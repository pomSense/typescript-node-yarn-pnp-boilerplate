import { saveAPIKey } from '../_infra/api-key-command-repo'

// Add your create API Key here and this will be used in the resolvers to set up your graphql api

export async function createAPIKeyController(input: { accountID: string }): { apiKey: string } {
  // your api key creation code here

  const apiKey = `1234`
  await saveAPIKey(apiKey)
  return { apiKey: apiKey }
}
