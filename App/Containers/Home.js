import React from "react";
import {Button, Text, View} from "react-native";
import AlertMessage from "../Components/AlertMessage";
import RoundedButton from "../Components/RoundedButton";



class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
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
                <AlertMessage title={'alert'}/>
                <RoundedButton
                    text='real buttons have curves'
                    onPress={() => window.alert('Rounded Button Pressed!')}
                />
            </View>
        );
    }
}

export default Home