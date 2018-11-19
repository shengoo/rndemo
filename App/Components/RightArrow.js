import React from "react";
import {Image,} from "react-native";
import styles from './Styles/RightArrowStyle'

export default props => (
    <Image
        source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAlUlEQVQ4T8XUQQ6CQAyF4X/Op3gMEhdIuI3gDRTPKGnCgk2nr2QSe4Cvr03aQuMqjncHfsAz288DL8AKTFnUAy2YoV9gBGY1aQ0047onldEIPKIPYImSKqAZHfABQlQFj+gAvLykGdCMG/AGXDQLhujfwaYjh5jtQx1ZwlRQxhQwhUVgGquBp7Aa2O8P1j2xVqcXPRs24oUkFS3rJAQAAAAASUVORK5CYII='}}
        style={{
            width: 20,
            height: 20,
        }}
    />
)