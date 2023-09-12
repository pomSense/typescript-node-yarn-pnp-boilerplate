import { APIKey } from '../../infra/models/api-key-entity'

// Add your dynamoDB toolbox functions here:

const apiKeyEntity = new APIKey()

async function saveAPIKey(apiKey: string) {
  // your save api key code here

  await apiKeyEntity.put({ apiKey: apiKey })
  return apiKey
}
