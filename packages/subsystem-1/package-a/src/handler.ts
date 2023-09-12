import { packageA } from '.'

import { Context } from 'aws-lambda'

/**
 * My lambda function that logs the event and packageA
 * @returns void
 */
export const lambda = async (event: KinesisStreamEvent, context?: Context) => {
  console.log('⭐event⭐', event)
  console.log('⭐packageA⭐', packageA)
}
