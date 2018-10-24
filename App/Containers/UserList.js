import React from "react";
import {Button, Text, View, ActivityIndicator, FlatList} from "react-native";
import FullButton from "../Components/FullButton";
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
        const {users } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
                {
                    users ? (
                        <FlatList
                            data={users}
                            renderItem={({item}) => <UserListItem key={item.id} data={item} />}
                        />
                    ): (
                        <ActivityIndicator />
                    )
                }
            </View>
        );
    }
}

const stateToProps = state => {
    return {
        users: state.github.users,
    }
};

const dispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(GithubActions.userRequest())
})
export default connect(stateToProps,dispatchToProps)(UserList)