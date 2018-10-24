import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

// Styles
import styles from './Styles/RootContainerStyles'
import AppNavigation from "../Navigation/AppNavigation";

class RootContainer extends Component {

    render () {
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle='dark-content' />
                <AppNavigation />
            </View>
        )
    }
}

export default RootContainer
