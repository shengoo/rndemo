import LineChart from "react-native-responsive-linechart";
import React from "react";
import { Text, View, Button,} from "react-native";
import {connect} from "react-redux";
// import {Button,} from 'antd-mobile-rn'
import GithubActions from '../Redux/GithubRedux'
import Colors from "../Themes/Colors";


class LineChartDemo extends React.Component {
    static navigationOptions = {
        title: 'LineChart',
    };
    render() {
        const data = [-10, -15, 40, 19, 32, 15, 52, 55, 20, 60, 78, 42, 56];
        const config = {
            line: {
                visible: true,
                strokeWidth: 1,
                strokeColor: "#54a0ff"
            },
            area: {
                visible: false
            },
            yAxis: {
                labelColor: "#54a0ff"
            },
            interpolation: "spline",
            insetY: 10,
            insetX: 10
        };
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <LineChart style={{ flex: 1 }} config={config} data={data} />
            </View>
        );
    }
}

export default LineChartDemo