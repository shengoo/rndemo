import React from "react";
import {Button, Text, View, ActivityIndicator, FlatList, RefreshControl, ScrollView, WebView} from "react-native";
import {connect} from "react-redux";

import styles from './Styles/PostDetailStyle'


class PostDetail extends React.Component {
    // 配置导航标题
    static navigationOptions = ({ navigation }) => {
        const {state} = navigation;
        return {
            title: `${(state.params && state.params.title) || ''}`,
        }
    };
    // constructor(props){
    //     super(props)
    //     const {setParams} = this.props.navigation;
    //     const {post} = this.props;
    //     setParams({ title: post.title.rendered })
    // }
    render() {
        const {post} = this.props;

        return (
                <WebView
                    style={{flex: 1}}
                    originWhitelist={['*']}
                    source={{ html: `<!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width"/></head><body>${post.content.rendered}</body></html>` }}
                />
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