import React from "react";
import {Button, Text, View, TouchableOpacity, WebView} from "react-native";


class WebViewScreen extends React.Component {
    onError = () => {
        console.log('onError')
    }
    onLoad = () => {
        console.log('onLoad')
    }
    onLoadEnd = () => {
        console.log('onLoadEnd')
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