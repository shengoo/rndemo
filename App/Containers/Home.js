import React from "react";
import { Text, View, Button,} from "react-native";
import {connect} from "react-redux";
// import {Button,} from '@ant-design/react-native'
import GithubActions from '../Redux/GithubRedux'
import Colors from "../Themes/Colors";
import ShareButton from "../Components/ShareButton";


class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <ShareButton />
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
