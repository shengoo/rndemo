import React from 'react'
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native'
import { Toast } from '@ant-design/react-native'

import styles from './Styles/LoginFormStyle'
import Colors from "../Themes/Colors";
import { connect } from "react-redux";
import { fetchPosts } from "../Redux/PostsRedux";
import UserAction from "../Redux/UserRedux";
import GithubActions from "../Redux/GithubRedux";
import Video from 'react-native-video';


class LoginForm extends React.Component {
    static navigationOptions = {
        title: '登陆',
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    login = () => {
        console.log('login')
        const { username, password } = this.state;
        if (!username || !password) {
            console.log('toast')
            Toast.fail('用户名或密码不能为空', 1)
            return;
        }
        Toast.loading(`登陆ing`)
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.form}>
                <Video source={require('../assets/background.mp4')}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                    rate={1} volume={1}
                    muted={true}
                    resizeMode="cover" repeat={true} key="video1" />
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        padding: 20,
                        paddingBottom: 10,
                    }}
                >
                    <TextInput
                        style={styles.input}
                        placeholder="请输入手机号"
                        onChangeText={(username) => this.setState({ username })}
                        keyboardType='numeric'
                        textContentType='telephoneNumber'
                        placeholderTextColor='#fff'
                    // value={this.state.username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="请输入密码"
                        onChangeText={(password) => this.setState({ password })}
                        textContentType='password'
                        secureTextEntry
                        placeholderTextColor='#fff'
                    // value={this.state.password}
                    />
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={this.login}
                    >
                        <Text style={styles.buttonText}>登陆</Text>
                    </TouchableOpacity>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        title="返回"
                    />
                </View>
            </View>
        )
    }
}

// export default LoginForm

const dispatchToProps = (dispatch) => ({
    loginSuccess: (data) => dispatch(UserAction.loginSuccess(data)),
});

export default connect(null, dispatchToProps)(LoginForm)
