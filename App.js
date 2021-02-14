import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { Provider } from './src/contexts/BlogContext'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

const navigator = createStackNavigator(
    {
        Index: IndexScreen,
        Show: ShowScreen,
        Create: CreateScreen,
        Edit: EditScreen,
    },
    {
        initialRouteName: 'Index',
        defaultNavigationOptions: {
            title: 'Blog Posts',
        },
    }
)

const App = createAppContainer(navigator)

const BlogProvider = () => (
    <Provider>
        <App />
    </Provider>
)

export default BlogProvider