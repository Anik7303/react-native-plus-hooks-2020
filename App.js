import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

import { AuthProvider, LocationProvider, TrackProvider } from './src/contexts'
import { setNavigator } from './src/navigationRef'
import AccountScreen from './src/screens/Account'
import ResolveAuthScreen from './src/screens/ResolveAuth'
import SigninScreen from './src/screens/Signin'
import SignupScreen from './src/screens/Signup'
import TrackCreate from './src/screens/TrackCreate'
import TrackDetailsScreen from './src/screens/TrackDetails'
import TrackListScreen from './src/screens/TrackList'

const trackFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetails: TrackDetailsScreen,
})

trackFlow.navigationOptions = {
    tabBarIcon: <FontAwesome5 name="th-list" size={20} />,
    title: 'Track List',
}

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
            trackFlow,
            TrackCreate: TrackCreate,
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
