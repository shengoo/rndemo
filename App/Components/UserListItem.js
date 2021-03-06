import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

// 组件样式
import styles from './Styles/UserListItemStyle'
// 导航服务
import NavigationService from "../Navigation/NavigationService";

// 数据通过props传递进来
// 导出一个纯函数的无状态组件
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
            />
            <Text style={styles.name}>{data.login}</Text>
        </View>
    </TouchableOpacity>
)