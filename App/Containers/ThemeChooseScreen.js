import React from "react";
import { Text, View, } from "react-native";
import styles from './Styles/ThemeChooseScreenStyle'

class ThemeChooseScreen extends React.Component {
    static navigationOptions = {
        title: 'ThemeChooseScreen',
    };

    render() {
        return (
            <View style={styles.hello}>
                <Text>Hello ThemeChooseScreen</Text>
            </View>
        );
    }
}

export default ThemeChooseScreen