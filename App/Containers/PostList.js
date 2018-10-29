import React from "react";
import {Button, Text, View, ActivityIndicator, FlatList, RefreshControl} from "react-native";
import {connect} from "react-redux";
import {fetchPosts, PostTypes} from "../Redux/PostsRedux";
import PostListItem from "../Components/PostListItem";


class PostList extends React.Component {
    // 配置导航标题
    static navigationOptions = {
        title: 'Posts',
    };
    componentDidMount(){
        // 网络请求需要在componentDidMount中发起
        this.props.fetchPosts();
    }
    render() {
        const {data, dispatch} = this.props;
        const {fetching} = data;

        // 网络请求要让用户感知到，一个loading即可
        if(fetching){
            return (
                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                    <ActivityIndicator size='large' color='green'/>
                </View>
            )
        }

        // 有错误一定要显示
        const {error} = data;
        if(error){
            return (
                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                    <Text>Error</Text>
                    {/* 网络错误的状态下，应该显示一个"点击重试"的按钮 */}
                    <Button title='点击重试' onPress={ () => this.props.fetchUsers()}/>
                </View>
            )
        }

        const { posts, refreshing } = data;
        // 下面是正常显示数据
        return (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                {
                    posts && (
                        <FlatList
                            // refreshControl={
                            //     <RefreshControl
                            //         refreshing={refreshing}
                            //         onRefresh={() => this.props.refreshUsers()}
                            //     />
                            // }
                            data={posts}
                            renderItem={({item}) => <PostListItem data={item} dispatch={dispatch} />}
                            // onEndReached={() => this.props.fetchMore(users[users.length - 1].id)}
                            keyExtractor={item => `${item.id}`}
                        />
                    )
                }
            </View>
        );
    }
}

// 把页面需要的state里的数据放在props上
const stateToProps = state => {
    return {
        data: state.posts,
    }
};

// 把页面需要派发的action放在props上
const dispatchToProps = (dispatch) => ({
    dispatch,
    fetchPosts: () => dispatch(fetchPosts()),
    // refreshUsers: () => dispatch(GithubActions.refreshRequest()),
    // fetchMore: (id) => dispatch(GithubActions.fetchMoreRequest(id))
});

// 导出一个有状态的组件
export default connect(stateToProps,dispatchToProps)(PostList)