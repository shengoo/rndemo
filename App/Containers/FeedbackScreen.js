import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Checkbox, List, WhiteSpace, TextareaItem, Button, } from '@ant-design/react-native'

import styles from './Styles/FeedbackScreenStyle'

const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;

class FeedbackScreen extends React.Component {

    static navigationOptions = {
        title: '反馈',
    };

    constructor(props) {
        super(props);
        this.state = {
            checkBox1: true,
            agreeItem1: true,
            checkboxItem1: true,
        };
    }

    render() {
        return (
            <ScrollView style={styles.hello}>
                <List renderHeader={() => '问题类型'}>
                    <CheckboxItem>
                        功能类型
                    </CheckboxItem>
                    <CheckboxItem>产品类型</CheckboxItem>
                    <CheckboxItem>安全类型</CheckboxItem>
                    <CheckboxItem>
                        其他问题
                    </CheckboxItem>
                </List>
                <List renderHeader={() => '请补充详细的问题和意见'}>
                    <TextareaItem
                        rows={4}
                        placeholder="请输入描述"
                    />
                </List>
                <List style={{marginTop: 20,}}>
                    <List.Item>
                        <Button
                            onClick={() => {

                            }}
                            type="primary"
                        >
                            提交
                        </Button>
                    </List.Item>
                </List>
            </ScrollView>
        );
    }
}

export default FeedbackScreen
