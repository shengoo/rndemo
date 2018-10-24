import React from "react";
import {Button, Text, View, ActivityIndicator, FlatList} from "react-native";
import FullButton from "../Components/FullButton";
import {connect} from "react-redux";
import GithubActions from '../Redux/GithubRedux'
import UserListItem from "../Components/UserListItem";


class UserList extends React.Component {
    static navigationOptions = {
        title: 'User List',
    };
    componentDidMount(){
        this.props.fetchUsers();
    }
    render() {
        const {users } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center',  }}>
                {
                    users ? (
                        <FlatList
                            data={users}
                            renderItem={({item}) => <UserListItem key={item.id} {...item} />}
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