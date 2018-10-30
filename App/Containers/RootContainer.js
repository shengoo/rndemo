import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

import NavigationService from '../Navigation/NavigationService'

// Styles
import styles from './Styles/RootContainerStyles'
import AppNavigation from "../Navigation/AppNavigation";
import Colors from "../Themes/Colors";

class RootContainer extends Component {

    render () {
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle='light-content' backgroundColor={Colors.primaryColor} />
                <AppNavigation
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </View>
        )
    }
}

export default RootContainer
