import React from "react";
import {Button, Text, View, ActivityIndicator, FlatList, RefreshControl} from "react-native";
import {connect} from "react-redux";
import GithubActions from '../Redux/GithubRedux'
import UserListItem from "../Components/UserListItem";
import Colors from "../Themes/Colors";



class UserList extends React.Component {
    // 配置导航标题
    static navigationOptions = {
        title: 'Github人物',
    };
    componentDidMount(){
        // 网络请求需要在componentDidMount中发起
        this.props.fetchUsers();
    }
    render() {
        const {github} = this.props;
        const {fetching} = github;

        // 网络请求要让用户感知到，一个loading即可
        if(fetching){
            return (
                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                    <ActivityIndicator size='large' color={Colors.primaryColor}/>
                </View>
            )
        }

        // 有错误一定要显示
        const {error} = github;
        if(error){
            return (
                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                    <Text>Error</Text>
                    {/* 网络错误的状态下，应该显示一个"点击重试"的按钮 */}
                    <Button title='点击重试' onPress={ () => this.props.fetchUsers()}/>
                </View>
            )
        }

        const { users, refreshing } = github;
        // 下面是正常显示数据
        return (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                {
                    users && (
                        <FlatList
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={() => this.props.refreshUsers()}
                                />
                            }
                            data={users}
                            renderItem={({item}) => <UserListItem key={item.id} data={item} />}
                            onEndReached={() => this.props.fetchMore(users[users.length - 1].id)}
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
        github: state.github,
    }
};

// 把页面需要派发的action放在props上
const dispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(GithubActions.userRequest()),
    refreshUsers: () => dispatch(GithubActions.refreshRequest()),
    fetchMore: (id) => dispatch(GithubActions.fetchMoreRequest(id))
});

// 导出一个有状态的组件
export default connect(stateToProps,dispatchToProps)(UserList)