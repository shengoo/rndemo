import React from "react";
import {Button, Text, View, ActivityIndicator, FlatList, RefreshControl} from "react-native";
import {connect} from "react-redux";
import GithubActions from '../Redux/GithubRedux'
import UserListItem from "../Components/UserListItem";


class UserList extends React.Component {
    static navigationOptions = {
        title: 'Github人物',
    };
    componentDidMount(){
        this.props.fetchUsers();
    }
    render() {
        const {github} = this.props;
        const {fetching} = github;


        if(fetching){
            return (
                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                    <ActivityIndicator size='large' color='green'/>
                </View>
            )
        }

        const {error} = github;
        if(error){
            return (
                <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                    <Text>Error</Text>
                </View>
            )
        }

        const { users, refreshing } = github;
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
                        />
                    )
                }
            </View>
        );
    }
}

const stateToProps = state => {
    return {
        github: state.github,
    }
};

const dispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(GithubActions.userRequest()),
    refreshUsers: () => dispatch(GithubActions.refreshRequest()),
})
export default connect(stateToProps,dispatchToProps)(UserList)