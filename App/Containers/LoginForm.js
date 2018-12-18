import React from 'react'
import {View, TextInput, TouchableOpacity, Text, Button} from 'react-native'
import {Toast} from '@ant-design/react-native'

import styles from './Styles/LoginFormStyle'
import Colors from "../Themes/Colors";
import {connect} from "react-redux";
import {fetchPosts} from "../Redux/PostsRedux";
import UserAction from "../Redux/UserRedux";
import GithubActions from "../Redux/GithubRedux";


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
        const {username, password} = this.state;
        if (!username || !password) {
            Toast.fail('用户名或密码不能为空')
            return;
        }
        fetch('http://127.0.0.1:3000/api/account/login',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "app-id": "odin-app",
                },
                body: JSON.stringify({
                    username,
                    password
                }),
            })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.code === 100000) {
                    this.props.loginSuccess(responseJson.data);
                    Toast.success(`登陆成功：${responseJson.data.name}`, 1)
                    this.props.navigation.goBack()
                } else {
                    Toast.fail(responseJson.msg || '登陆失败', 1)
                }
                console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
        Toast.loading(`登陆ing`, 0)
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.form}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入手机号"
                        onChangeText={(username) => this.setState({username})}
                        keyboardType='numeric'
                        textContentType='telephoneNumber'
                        // value={this.state.username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="请输入密码"
                        onChangeText={(password) => this.setState({password})}
                        textContentType='password'
                        secureTextEntry
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
