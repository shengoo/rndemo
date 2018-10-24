import React from "react";
import {Button, Text, View} from "react-native";
import FullButton from "../Components/FullButton";



class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
            />
        ),
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                />
                <FullButton
                    text='A FullButton'
                    onPress={() => window.alert('Full Button Pressed!')}
                />
            </View>
        );
    }
}

export default Home