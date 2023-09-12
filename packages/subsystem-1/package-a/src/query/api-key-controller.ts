import { getAPIKey } from './api-key'

/**
 * Gets a user's own details
 *
 * @param id the user's UUID
 */
export const getAPIKeyController = (): string => {
  initApplication()
  try {
    return getAPIKey()
  } catch (e) {
    return 'Error'
  }
}
