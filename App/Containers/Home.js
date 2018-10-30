import React from "react";
import { Text, View, Button,} from "react-native";
import {connect} from "react-redux";
// import {Button,} from 'antd-mobile-rn'
import GithubActions from '../Redux/GithubRedux'
import Colors from "../Themes/Colors";


class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                onClick={() => alert('This is a button!')}
                style={{color: Colors.text}}
            >Info</Button>
        ),
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    type='primary'
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                    onClick={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        });
                    }}
                >Go to Details</Button>
            </View>
        );
    }
}

export default Home