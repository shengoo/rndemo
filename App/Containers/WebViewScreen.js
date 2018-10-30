import React from "react";
import {Button, Text, View, TouchableOpacity, WebView, ActivityIndicator} from "react-native";
import {Toast} from 'antd-mobile-rn'


class WebViewScreen extends React.Component {
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
                    source={{uri: 'http://www.baidu.com'}}
                    onError={this.onError}
                    onLoad={this.onLoad}
                    onLoadEnd={this.onLoadEnd}
                    onLoadStart={this.onLoadStart}
                    onMessage={this.onMessage}
                />
            </View>
        );
    }
}

export default WebViewScreen