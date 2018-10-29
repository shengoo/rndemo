import React from "react";
import {createBottomTabNavigator, createStackNavigator } from "react-navigation";

import Home from "../Containers/Home";
import Details from "../Containers/Details";
import Settings from "../Containers/Settings";
import Profile from "../Containers/Profile";
import UserList from "../Containers/UserList";
import UserDetail from "../Containers/UserDetail";
import PostList from "../Containers/PostList";
import PostDetail from "../Containers/PostDetail";



const HomeStack = createStackNavigator(
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

const UserListTab = createStackNavigator(
    {
        UserList: UserList,
        UserDetail: UserDetail
    }
)

const PostTab = createStackNavigator({
    PostList: PostList,
    PostDetail: PostDetail,
})

const TabNavigator = createBottomTabNavigator(
    {
        PostTab: PostTab,
        UserList: UserListTab,
        Home: HomeStack,
        // UserList: UserListTab,
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