import { StyleSheet } from 'react-native'
import Colors from "../../Themes/Colors";

export default StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.rowBackground
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    name: {
        paddingLeft: 10,
        flex: 1,
    }
})