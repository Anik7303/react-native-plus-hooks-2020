import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import { Provider as AuthProvider } from './src/contexts/AuthContext'
import { setNavigator } from './src/navigationRef'

const loginFlow = createStackNavigator(
    {
        Signin: SigninScreen,
        Signup: SignupScreen,
    },
    { initialRouteName: 'Signin' }
)

const trackListFlow = createStackNavigator(
    {
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen,
    },
    { initialRouteName: 'TrackList' }
)

const mainFlow = createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
})

const navigator = createSwitchNavigator({
    loginFlow,
    mainFlow,
})

const App = createAppContainer(navigator)

const AppProvider = () => (
    <AuthProvider>
        <StatusBar style="auto" />
        <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
)

export default AppProvider
