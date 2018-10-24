import React from "react";
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
        Settings: SettingsStack,
    },
    {
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
        },
    }
);

export default TabNavigator