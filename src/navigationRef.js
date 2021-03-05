import { NavigationActions } from 'react-navigation'

let navigator = null

export const setNavigator = (nav) => (navigator = nav)

/**
 *
 * @param {String} routeName Route to navigate to
 * @param {Object} params (optional) any data to pass to screen
 */
export const navigate = (routeName, params) =>
    navigator.dispatch(NavigationActions.navigate({ routeName, params }))
