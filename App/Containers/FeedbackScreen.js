import React from "react";
import { Text, View, } from "react-native";
import styles from './Styles/FeedbackScreenStyle'

class FeedbackScreen extends React.Component {
    static navigationOptions = {
        title: '反馈',
    };

    render() {
        return (
            <View style={styles.hello}>
                <Text>Hello FeedbackScreen</Text>
            </View>
        );
    }
}

export default FeedbackScreen