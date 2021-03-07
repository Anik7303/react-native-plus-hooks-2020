import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { AuthProvider, LocationProvider, TrackProvider } from './src/contexts'
import { setNavigator } from './src/navigationRef'
import AccountScreen from './src/screens/Account'
import ResolveAuthScreen from './src/screens/ResolveAuth'
import SigninScreen from './src/screens/Signin'
import SignupScreen from './src/screens/Signup'
import TrackCreateScreen from './src/screens/TrackCreate'
import TrackDetailsScreen from './src/screens/TrackDetails'
import TrackListScreen from './src/screens/TrackList'

const navigator = createSwitchNavigator(
    {
        authFlow: createStackNavigator(
            {
                Signin: SigninScreen,
                Signup: SignupScreen,
            },
            {
                defaultNavigationOptions: {
                    headerShown: false,
                },
            }
        ),
        mainFlow: createBottomTabNavigator({
            trackFlow: createStackNavigator({
                TrackList: TrackListScreen,
                TrackDetails: TrackDetailsScreen,
            }),
            TrackCreate: TrackCreateScreen,
            Account: AccountScreen,
        }),
        ResolveAuth: ResolveAuthScreen,
    },
    { initialRouteName: 'ResolveAuth' }
)

const Navigator = createAppContainer(navigator)

const App = () => (
    <AuthProvider>
        <LocationProvider>
            <TrackProvider>
                <Navigator ref={(navigator) => setNavigator(navigator)} />
            </TrackProvider>
        </LocationProvider>
    </AuthProvider>
)

export default App
