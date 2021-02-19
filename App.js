import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import { Provider as AuthProvider } from './src/contexts/AuthContext'
import { Provider as LocationProvider } from './src/contexts/LocationContext'
import { setNavigator } from './src/navigationRef'

const navigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signin: SigninScreen,
        Signup: SignupScreen,
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetail: TrackDetailScreen,
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    }),
})

const App = createAppContainer(navigator)

const AppProvider = () => (
    <AuthProvider>
        <LocationProvider>
            <SafeAreaProvider>
                <StatusBar style="auto" />
                <App
                    ref={(navigator) => {
                        setNavigator(navigator)
                    }}
                />
            </SafeAreaProvider>
        </LocationProvider>
    </AuthProvider>
)

export default AppProvider
