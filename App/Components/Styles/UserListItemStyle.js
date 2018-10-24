import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
    row: {
        flex: 1,
        margin: Metrics.baseMargin,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    avatar: {
        width: 50,
        height: 50,
        marginVertical: 5,
        borderRadius: Metrics.buttonRadius,
    },
    name: {
        margin: 18,
        textAlign: 'center',
        color: '#000',
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.type.bold
    }
})
