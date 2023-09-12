import { packageA } from '.'

import { APIGatewayProxyEventV2WithLambdaAuthorizer, Context } from 'aws-lambda'

/**
 * My lambda function that logs the event and packageA
 * @returns void
 */
export const lambda = async <T>(event: APIGatewayProxyEventV2WithLambdaAuthorizer<T>, context?: Context) => {
  console.log(':star:event:star:', event)
  console.log(':star:packageA:star:', packageA)
}
