import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import RestaurentDetailScreen from './src/screens/RestaurentDetailScreen';

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        RestaurentDetail: RestaurentDetailScreen,
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search',
        },
    }
);

export default createAppContainer(navigator);
