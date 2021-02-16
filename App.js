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

const loginStack = createStackNavigator(
    {
        Signin: SigninScreen,
        Signup: SignupScreen,
    },
    { initialRouteName: 'Signin' }
)

const trackListStack = createStackNavigator(
    {
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen,
    },
    { initialRouteName: 'TrackList' }
)

const mainStack = createBottomTabNavigator({
    trackListStack,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
})

const navigator = createSwitchNavigator({
    loginStack,
    mainStack,
})

const App = createAppContainer(navigator)

const AppProvider = () => (
    <AuthProvider>
        <StatusBar style="auto" />
        <App />
    </AuthProvider>
)

export default AppProvider
