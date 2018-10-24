import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

import styles from './Styles/UserListItemStyle'
import NavigationService from "../Navigation/NavigationService";

export default ({data}) => (
    <TouchableOpacity
        onPress={() => {
            NavigationService.navigate('UserDetail', data)
        }}
    >
        <View style={styles.row}>
            <Image
                style={styles.avatar}
                source={{uri: data.avatar_url}}
                // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            <Text style={styles.name}>{data.login}</Text>
        </View>
    </TouchableOpacity>
)