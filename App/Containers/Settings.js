import React from "react";
import {Button, Text, View, TouchableOpacity} from "react-native";


class Settings extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Settings Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}

export default Settings