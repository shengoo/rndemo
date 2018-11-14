import React from "react";
import {createBottomTabNavigator, createStackNavigator} from "react-navigation";

import Home from "../Containers/Home";
import Details from "../Containers/Details";
import Settings from "../Containers/Settings";
import Profile from "../Containers/Profile";
import UserList from "../Containers/UserList";
import UserDetail from "../Containers/UserDetail";
import PostList from "../Containers/PostList";
import PostDetail from "../Containers/PostDetail";
import Form from '../Containers/LoginForm'
import Colors from "../Themes/Colors";
import WebViewScreen from "../Containers/WebViewScreen";

const commonNavigationOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: Colors.text,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerBackTitle: '返回'
}


const HomeStack = createStackNavigator({
        Home: Home,
        Details: Details,
    }, {
        navigationOptions: commonNavigationOptions
    }
);


const SettingsStack = createStackNavigator({
        Settings: Settings,
        Profile: Profile,
    }, {
        navigationOptions: commonNavigationOptions
    }
);

const UserListTab = createStackNavigator(
    {
        UserList: UserList,
        UserDetail: UserDetail
    },
    {
        navigationOptions: commonNavigationOptions
    }
)

const PostTab = createStackNavigator({
        PostList: PostList,
        PostDetail: PostDetail,
    },
    {
        navigationOptions: commonNavigationOptions
    }
)

const FormTab = createStackNavigator({
        Form: Form
    },
    {
        navigationOptions: commonNavigationOptions
    }
)
const WebViewTab = createStackNavigator({
        WebViewScreen: WebViewScreen
    },
    {
        navigationOptions: commonNavigationOptions
    }
)

const TabNavigator = createBottomTabNavigator({
        // WebView: WebViewTab,
        Form: FormTab,
        PostTab: PostTab,
        UserList: UserListTab,
        Home: HomeStack,
        // UserList: UserListTab,
        Settings: SettingsStack,
    }, {
        tabBarOptions: {
            activeTintColor: Colors.primaryColor,
            inactiveTintColor: 'gray',
        },
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor,
            },
            headerTintColor: Colors.text,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

export default TabNavigator
