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
    title: {
        margin: 18,
        color: '#000',
        fontSize: Fonts.size.medium,
        fontFamily: Fonts.type.bold
    }
})
