import React from 'react'
import {View, TextInput, TouchableOpacity, Text, } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import {Toast} from 'antd-mobile-rn'

import styles from './Styles/LoginFormStyle'
import Colors from "../Themes/Colors";
import {connect} from "react-redux";


class LoginForm extends React.Component {
    static navigationOptions = {
        title: '登陆',
    };
    login = () => {
        console.log(this)
        // const {phone, password} = this.props.formData.login.values;
        Toast.loading(`登陆ing`)
        setTimeout(() => {
            if(Math.floor(Math.random() * 10) % 2) {
                Toast.success('登陆成功', .5)
            } else {
                Toast.fail('登陆失败')
            }
        }, 2000)
    }
    render() {
        console.log(this.props)
        const {handleSubmit, dispatch, change} = this.props
        return (
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="请输入手机号"
                    onChangeText={(text) => change('phone', text)}
                    keyboardType='numeric'
                    textContentType='telephoneNumber'
                />
                <TextInput
                    style={styles.input}
                    placeholder="请输入密码"
                    onChangeText={(text) => change('password', text)}
                    textContentType='password'
                    secureTextEntry
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

LoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default connect(state => ({formData: state.form}), null)(LoginForm)
