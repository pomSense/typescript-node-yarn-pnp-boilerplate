import { APIKey } from '../../infra/models/api-key-entity'

// Add your dynamoDB toolbox functions here:

const apiKeyEntity = new APIKey()

async function getAPIKey(apiKey: string) {
  // your save api key code here

  await apiKeyEntity.get({ apiKey: apiKey })
  return apiKey
}
