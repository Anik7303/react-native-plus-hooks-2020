import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ExerciseScreen from './src/screens/ExerciseScreen';

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentsScreen,
        Exercise: ExerciseScreen,
    },
    {
        initialRouteName: 'Exercise',
        defaultNavigationOptions: {
            title: 'App',
        },
    }
);

export default createAppContainer(navigator);
