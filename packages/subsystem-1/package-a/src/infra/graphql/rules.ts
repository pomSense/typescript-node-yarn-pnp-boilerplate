import { rule } from 'graphql-shield'

/**
 * {@link https://www.graphql-shield.com/docs graphql-shield docs}
 * This Class is the Base class for Graphql Shield Rules
 * this class contains the common rules which is implemented in whole app (all packages)
 * Each method of this class should be the instance of Graphql-shield rule {@link rule}
 */
export abstract class BaseShieldRules {
  /**
   * Graphql Shield Rule
   *
   * This rule is used to check, user is authenticated or not
   */
  /* eslint-disable-next-line */
  public isAuthenticated = rule({ cache: 'contextual' })(async (_, __, ctx, ___) => {
    const { authorizer } = ctx
    if (authorizer?.authenticated == true || authorizer?.authenticated == 'true') {
      return true
    } else {
      return new Error('Not Authorized')
    }
  })
}
/**
 * This Class contains the graphql shield rules for this package
 * It is extends from BaseShieldRules class from the core {@link BaseShieldRules}
 */
class ShieldRules extends BaseShieldRules {}

/**
 * Export the instance of the Shield Rule class
 */
export const shieldRules = new ShieldRules()
