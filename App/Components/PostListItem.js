import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

// 组件样式
import styles from './Styles/PostListItemStyle'
// 导航服务
import NavigationService from "../Navigation/NavigationService";
import {selectPost} from "../Redux/PostsRedux";

// 数据通过props传递进来
// 导出一个纯函数的无状态组件
export default ({data, dispatch}) => (
    <TouchableOpacity
        onPress={() => {
            dispatch(selectPost(data))
            NavigationService.navigate('PostDetail', {title: data.title.rendered})
        }}
    >
        <View style={styles.row}>
            <Text style={styles.title}>{data.title.rendered}</Text>
            <Text style={styles.date}>{data.date}</Text>
        </View>
    </TouchableOpacity>
)