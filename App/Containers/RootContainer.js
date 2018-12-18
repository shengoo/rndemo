import React, { Component } from 'react'
import {View, StatusBar, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {
    Provider,
  } from '@ant-design/react-native';
import NavigationService from '../Navigation/NavigationService'

// Styles
import styles from './Styles/RootContainerStyles'
import AppNavigation from "../Navigation/AppNavigation";
import Colors from "../Themes/Colors";
import Constants from "../Utils/Constants";
import UserAction from "../Redux/UserRedux";

class RootContainer extends Component {

    componentDidMount(){
        this.getLocalData();
    }

    async getLocalData(){
        try {
            const value = await AsyncStorage.getItem(Constants.STORAGE_KEY_USER_INFO);
            if (value !== null) {
                // We have data!!
                const userData = JSON.parse(value);
                if(userData.loggedIn){
                    this.props.loginSuccess(userData.info)
                }
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    render () {
        return (
            <Provider style={styles.applicationView}>
                <StatusBar barStyle='dark-content' />
                <AppNavigation
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Provider>
        )
    }
}

const dispatchToProps = (dispatch) => ({
    loginSuccess: (data) => dispatch(UserAction.loginSuccess(data)),
});

// export default connect(null,dispatchToProps)(RootContainer)
export default RootContainer
