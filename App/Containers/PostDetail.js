import React from "react";
import {Button, Text, View, ActivityIndicator, FlatList, RefreshControl} from "react-native";
import {connect} from "react-redux";


class PostDetail extends React.Component {
    // 配置导航标题
    static navigationOptions = {
        title: 'Posts',
    };
    render() {
        const {post} = this.props;

        return (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                <Text>Post id: {post.id}</Text>
            </View>
        );
    }
}

// 把页面需要的state里的数据放在props上
const stateToProps = state => {
    return {
        post: state.posts.post,
    }
};

// 导出一个有状态的组件
export default connect(stateToProps,null)(PostDetail)