import React from "react";
import {Text} from 'react-native';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator,
} from "react-navigation";

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
import FeedbackScreen from "../Containers/FeedbackScreen";
import AuthLoadingScreen from '../Containers/AuthLoadingScreen';


const commonNavigationOptions = {
    // headerStyle: {
    //     backgroundColor: Colors.primaryColor,
    // },
    // headerTintColor: Colors.text,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerBackTitle: '返回',
    cardStyle: {
        // backgroundColor: 'red'
    }
}


const HomeStack = createStackNavigator(
    {
        Home: Home,
        Details: Details,
    }, {
        navigationOptions: commonNavigationOptions
    }
);

const UserListStack = createStackNavigator(
    {
        UserList: UserList,
        UserDetail: UserDetail
    },
    {
        navigationOptions: commonNavigationOptions
    }
);


const SettingsStack = createStackNavigator(
    {
        Settings: Settings,
        Profile: Profile,
        VersionList: WebViewScreen,
        Feedback: FeedbackScreen,
    }, {
        navigationOptions: commonNavigationOptions,
        // mode: 'modal',
        // headerMode: 'none',
    }
);


const PostStack = createStackNavigator({
        PostList: PostList,
        PostDetail: PostDetail,
    },
    {
        navigationOptions: commonNavigationOptions
    }
)

const FormStack = createStackNavigator({
        // Chart: LineChart,
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
        Home: HomeStack,
        // WebView: WebViewTab,
        // Form: FormStack,
        // PostStack: PostStack,
        List: UserListStack,
        Settings: SettingsStack,
        // UserList: UserListStack,
    }, {
        tabBarOptions: {
            activeTintColor: Colors.primaryColor,
            inactiveTintColor: 'gray',
        },
        navigationOptions: ({navigation}) => ({
            tabBarLabel: ({focused}) => {
                console.log(navigation)
                const {routeName} = navigation.state;
                if (routeName === 'Home') {
                    return <Text style={{
                        fontSize: 12,
                        color: focused ? Colors.primaryColor : Colors.tabInactive
                    }}>首页</Text>;
                } else if (routeName === 'List') {
                    return <Text style={{
                        fontSize: 12,
                        color: focused ? Colors.primaryColor : Colors.tabInactive
                    }}>指数</Text>;
                } else if (routeName === 'Settings') {
                    return <Text style={{
                        fontSize: 12,
                        color: focused ? Colors.primaryColor : Colors.tabInactive
                    }}>我的</Text>;
                }
                return null;
            },
            headerStyle: {
                backgroundColor: Colors.primaryColor,
            },
            headerTintColor: Colors.text,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }),
    }
);

const Root = createStackNavigator({
    Home: TabNavigator,
    LoginModal: Form
}, {
    mode: 'modal',
    headerMode: 'none',
})
// export default Root

export default createAppContainer(createSwitchNavigator(
  {
    App: Root,
    AuthLoading: AuthLoadingScreen,
    Auth: Form,
  },
  {
    //initialRouteName: 'AuthLoading',
  }
));
