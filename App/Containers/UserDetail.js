import React from "react";
import {Button, Text, View, Image} from "react-native";
import FullButton from "../Components/FullButton";


class UserDetail extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('login', 'A Nested Details Screen'),
        };
    };
    render() {
        const {navigation} = this.props;
        const avatarUrl = navigation.getParam('avatar_url')
        const login = navigation.getParam('login')
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={{uri: avatarUrl}}
                    style={{width: 100, height: 100}}
                />
                <Text>{login}</Text>
            </View>
        );
    }
}

export default UserDetail