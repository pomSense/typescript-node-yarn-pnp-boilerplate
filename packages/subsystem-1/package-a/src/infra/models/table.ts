import { Table } from 'dynamodb-toolbox'

const MY_TABLE = 'MY_TABLE'

// Require AWS SDK and instantiate DocumentClient
import DynamoDB from 'aws-sdk/clients/dynamodb'
const DocumentClient = new DynamoDB.DocumentClient()

// Instantiate a table
export const MyTable = new Table({
  // specifies table name (used by DynamoDB)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  name: MY_TABLE!,

  // Define partition and sort keys
  partitionKey: 'pk',
  //sortKey: 'sk',
  entityField: 'entity',
  //indexes: {
  // GSI to get user's membership details with the associated workspaces along with workspace's details
  // GSI1: { partitionKey: 'gsi_pk_1', sortKey: 'gsi_sk_1' }
  // },

  // Add the DocumentClient
  DocumentClient
})
