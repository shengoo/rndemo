import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors} from '../../Themes/'


export default StyleSheet.create({
    form: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 30,
        justifyContent: 'center'
    },
    input: {
        height: 50,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: Colors.borderColor,
        paddingLeft: 16,
        backgroundColor: 'rgba(0,0,0,0.2)',
        color: '#fff',
    },
    loginButton: {
        height: 50,
        backgroundColor: Colors.primaryColor,
        marginBottom: 20,
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderRadius: 5,
    },

    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        color: Colors.text
    },
})
