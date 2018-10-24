import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

import NavigationService from '../Navigation/NavigationService'

// Styles
import styles from './Styles/RootContainerStyles'
import AppNavigation from "../Navigation/AppNavigation";

class RootContainer extends Component {

    render () {
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle='dark-content' />
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
