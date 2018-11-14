import React from 'react'
import {View, TextInput, TouchableOpacity, Text,} from 'react-native'
import {Field, reduxForm} from 'redux-form'
import {Toast} from 'antd-mobile-rn'

import styles from './Styles/LoginFormStyle'
import Colors from "../Themes/Colors";
import {connect} from "react-redux";


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
        const formData = new FormData();
        formData.append('username', username)
        formData.append('password', password)
        fetch('http://127.0.0.1:3000/account/login',
            {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.code === 100000) {
                    Toast.success(`登陆成功：${responseJson.data.name}`, 1)
                } else {
                    Toast.fail(responseJson.msg || '登陆失败', 1)
                }
                console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
        Toast.loading(`登陆ing`)
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="请输入手机号"
                    onChangeText={(username) => this.setState({username})}
                    keyboardType='numeric'
                    textContentType='telephoneNumber'
                    value={this.state.username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="请输入密码"
                    onChangeText={(password) => this.setState({password})}
                    textContentType='password'
                    secureTextEntry
                    value={this.state.password}
                />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={this.login}
                >
                    <Text style={styles.buttonText}>登陆</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LoginForm

// LoginForm = reduxForm({
//     // a unique name for the form
//     form: 'login'
// })(LoginForm)
//
// export default connect(state => ({formData: state.form}), null)(LoginForm)
