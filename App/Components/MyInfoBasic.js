import React from "react";
import { Text, View, Image, TouchableOpacity, TouchableHighlight} from "react-native";
import styles from './Styles/MyInfoBasicStyle'
import RightArrow from "./RightArrow";
import NavigationService from "../Navigation/NavigationService";

export default ({user}) => (
    <TouchableOpacity
        style={styles.container}
        onPress={() => {
            if(!user.loggedIn){
                NavigationService.navigate('LoginModal')
            }
        }}
    >
        <Image
            source={{uri: 'data:image/png;base64,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'}}
            style={styles.avatar}
        />
        {
            user.loggedIn ? (
                <Text style={styles.name}>{user.info.name}</Text>
            ) : (
                <Text style={styles.name}>点击登陆</Text>
            )
        }

        <RightArrow />
    </TouchableOpacity>
)