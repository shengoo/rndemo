import {createBottomTabNavigator, createStackNavigator, StackNavigator} from "react-navigation";
import Home from "../Containers/Home";
import Details from "../Containers/Details";
import Settings from "../Containers/Settings";
import Profile from "../Containers/Profile";


const HomeStack = StackNavigator(
    {
        Home: Home,
        Details: Details,
    },
    {
        // initialRouteName: 'Home',
        navigationOptions: {
            headerBackTitle: '返回'
        }
    }
);


const SettingsStack = createStackNavigator(
    {
        Settings: Settings,
        Profile: Profile,
    },
    {
        navigationOptions: {
            headerBackTitle: '返回'
        }
    });

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        // Home: Home2,
        Settings: SettingsStack,
    }
);

export default TabNavigator