import React from 'react'
import { View, Text, Image} from 'react-native'

export default (props) => (
    <View>
        <Image
            style={{width: 50, height: 50}}
            source={{uri: props.avatar_url}}
            // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Text>{props.login}</Text>
    </View>
)