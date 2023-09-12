import { Entity } from 'dynamodb-toolbox'

import { entity, prefix } from './constants'
import { MyTable } from './table'

/**
 *  IAPIKey defines API Key's entity
 */
export interface IAPIKey {
  /**
   * The entity name of the api key
   */
  entity: string
  /**
   * The api key
   */
  apiKey: string
}

/**

* APIKey {@link Entity entity}, used for setting the model for the api key
*
* @category Entities
*/

export const APIKey = new Entity({
  // specifies entity name
  name: entity.APIKey,

  // Define attributes
  attributes: {
    id: {
      partitionKey: true,
      prefix: prefix.apiKey,
      default: (data: IAPIKey) => {
        return data.apiKey
      }
    },
    // sk: {
    //   sortKey: true,
    //   prefix: prefix.metadata,
    //   default: (data: IAPIKey) => {
    //     return data.id
    //   },
    //   hidden: true
    // },
    propertyA: { type: 'string' },
    propertyB: { type: 'string' }
  },
  // Assign it to our table
  table: MyTable
})
