import {createBottomTabNavigator, createStackNavigator} from "react-navigation";
import Home from "../Containers/Home";
import Details from "../Containers/Details";
import Settings from "../Containers/Settings";
import Profile from "../Containers/Profile";


const HomeStack = createStackNavigator(
    {
        Home: Home,
        Details: Details,
    },
    {
        initialRouteName: 'Home',
    }
);

const SettingsStack = createStackNavigator({
    Settings: Settings,
    Profile: Profile,
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    }
);

export default TabNavigator