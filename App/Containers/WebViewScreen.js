import React from "react";
import {Button, Text, View, TouchableOpacity, ActivityIndicator} from "react-native";
import { WebView } from "react-native-webview";
import {Toast} from 'antd-mobile-rn'
import Colors from "../Themes/Colors";


class WebViewScreen extends React.Component {

    // static navigationOptions = ({ navigation }) => {
    //     let tabBarVisible = false;
    //     if (navigation.state.index > 0) {
    //         tabBarVisible = false;
    //     }
    //
    //     return {
    //         tabBarVisible,
    //     };
    // };

    constructor(props){
        super(props)
        this.state = {
            loadFinish: false,
        }
    }

    componentDidMount(){
        Toast.loading('')
    }


    onError = () => {
        console.log('onError')
    }
    onLoad = () => {
        console.log('onLoad')
    }
    onLoadEnd = () => {
        console.log('onLoadEnd')
        Toast.hide()
    }
    onLoadStart = () => {
        console.log('onLoadStart')
    }
    onMessage = () => {
        console.log('onMessage')
    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <WebView
                    style={{flex: 1}}
                    source={{uri: 'http://localhost:3000/'}}
                    onError={this.onError}
                    onLoad={this.onLoad}
                    onLoadEnd={this.onLoadEnd}
                    onLoadStart={this.onLoadStart}
                    onMessage={this.onMessage}
                    onLoadProgress={e => console.log(e.nativeEvent.progress)}
                />
            </View>
        );
    }
}

export default WebViewScreen