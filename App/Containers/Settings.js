import React from "react";
import {Text, View, TouchableOpacity, ScrollView, SectionList, Image, Share } from "react-native";
import { List, SwipeAction} from 'antd-mobile-rn'
import {connect} from "react-redux";
const Item = List.Item;

import {MyInfoBasic} from "../Components";
import ShareButton from "../Components/ShareButton";
import UserAction from "../Redux/UserRedux";


class Settings extends React.Component {
    static navigationOptions = {
        title: '我的',
        headerRight: (
            <ShareButton />
        ),
    };
    constructor(props: any) {
        super(props);
    }
    render() {
        const {user, logout} = this.props;
        console.log(user)
        const right = [
            {
                text: 'More',
                onPress: () => console.log('more'),
                style: { backgroundColor: 'orange', color: 'white' },
            },
            {
                text: 'Delete',
                onPress: () => console.log('delete'),
                style: { backgroundColor: 'red', color: 'white' },
            },
        ];
        const left = [
            {
                text: 'Read',
                onPress: () => console.log('read'),
                style: { backgroundColor: 'blue', color: 'white' },
            },
            {
                text: 'Reply',
                onPress: () => console.log('reply'),
                style: { backgroundColor: 'green', color: 'white' },
            },
        ];
        return (
            <ScrollView style={{ flex: 1, paddingTop: 10, paddingBottom: 10, }}>
                <MyInfoBasic
                    user={user}
                    logout={logout}
                />
                <List renderHeader={() => 'menu'}>
                    <Item
                        thumb='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAALJUlEQVRoQ8VZe3AV5RU/u/fehCSkKAxSnCIIJJEESkIIZZzCIFgQ8VHEBHw0gA5jCpUKMigNSW4CKaLOtLzLSDEiBEmLj9rH1Ao67bS0JRUo2JFHaGcK6RT8gwLS5N69+3XO+b7z7bebvRDGYJNhEjZ7vz2/8/id3zlrwQ36mhSPR/v2vTIWoqkysKMlHYmOEU7KzX9vyYZ+PflIqycOm7lxRb9Yjn0nOKJMuM6oDidZkEq5QzudROZ/k52QcJL0GFcI+Gjlzh55Jtt93Yc90bKqIHE5eSfY1phEIlHkCCc/kXJu7UwmrM5kApKpFAAIcF2hjHZBCAH4jdcO1ey67mdezclpD5u+/unMfrk3jbPt6HhwRXFCJAscJ5WfTDm5nU4COpKd5FHyrOtqA9F4eY2Ndun/NxTAI82NA3Jcd0IKRJkQUOQkE3ckXXdwwklGE64D6Fn0IhqM32QQGQ3qujRSel1Ijws2WoKj/4sbEIHK1+L/TrnuLZ0p9GoCHEoBfBiHXnqYc5gAKDDyPgSG98rfGQCB5X8KAN53uKa5Z1Po/i1LBaeC6WX0sAy9kSIqZRiANBiLkwFI0BqsAY7vA4xSzNZnc33oozmCCjSnH52rbtKRB2i1GIB5EIXcSBFdhMYh2sNGwYZHTYFjwzodCSAW0WB1iql7PKNlGnKkEQAbz/dY921ZKsxQUzR06AM5rv8mvW4WJ4MORs2sB3TKr5/6IViWBdnZ2ZCTk3M1grnq34bHH6KAEABmEQ59+hxXRguVNkZxmlGTBe0xk1n471WtI89/XhChAJg5zByX4WUWCaSDUZxpo6boVEc54ag0ABCWAIjaYEUjcLS6mTxeuHq2ShmZPsHcP1H3U/r7sLqH6Kc1Y/MSmULamx49mg2I2UfToypcXZxpmEmnmkpLFwFgIluGgVEbPo63aADakYrlzNw/Gd+rAaBNBIBZRBaLBOBLK/ai+uljHsNLZmFz1OTZXiESANXYuDjRkL9U74SsrCyKAAMIY56rAtAhMwDgYdqLZjpwxNIxViB1dF04KZ+BXB+/f3Yb9OrVC8a8PC+UeRgsAxhaN1Om0L2bnxGsW7x8l81JfkgBMLpruq4cFjVuggxg38INVMD0cOMnRwnZCYFc6wsBEBkwANP7ZncN5rivUekC92si7spS/7AjZEHuX7Sxi/HsXQaEqXQtEBrA9E3PGEWsqt7sripFmGLNphaxbLgpKxd6Z2bDlzKz4OT5M3Cp8zMdNWYeNhCj6iZTsoB9EQU4sGwbARv/8hNUI1bEBohYunFxqp2Kv0n33V77TUo1CwEEmYKV46S8Ehh+yyDoHcuCtk/PwpuHP5BphZ4VAqq+PhPmlE4lY85eOA+PNdVCMuXQPVy8JggCQDUgaZnPwl8PPLuNUuprL81XqStARJBibS3H8TNt9WkAmEzBACYMGw0105+kA3EombejAdovnqeHD8jtC69X1kEsGqMH1P58K+w/0epToZpljHlApFQRs7KlaAD8cdmP6TkagKJQEbUAbFkzoQDu2fRdLSX8npOe/sGspTBy4O10wAfHW6H+V9voIAQ2Ob+Urv/17ClYuGetHmI492V3VhSqNBNGQAOzPNn9p2XbKQLjXkQWYmWrekUEQUgByBEYUvuglBIIwMcUireZ00d8eQhsKF+mH7qo5UXy+KaK5TIHAKBq9xo49q/TeogxtRUC4PxFtvvt4i36c/hLGCOFXc/IyAD8x1+hAJh9ZCS8gl45bT5Myi8lw4+1t5GHRg4cSmftP94Ktb/YGihKg4aNfoBn/m7xj8ho1kPXAyIWi2kQg2sepOdb0zYuphTisFLxcf6p6wN694WmylqI2hHtAfwMFuzjTXVw9j/n9MRmnoMHmQSBAKiItUSmu+mzB597jc4eu3audAbqJJX33Lnx+on6vQQCARALMQCP3z0pwdZiilVNnAXlxZN9AN746H3Y9GGLFl1BKcEAJPUqaa4ASN9wfQAcXN5EkSl9oVKepzu90k0qI/5WswcwEsMbHu4KgOmRUshoQOhF5PpdlfWQmyU1/MUrl2H2q9VwqeOKN5FxY1PFa3Z21leuGllpMtWxAGhVERjzwrfUVZlmQvcMCRYBINCC1RXETtZUTCE9PqrB3ch/roucjCxontvgA1CxvRoud3oAZPrx0C/Nk/JCfuHvBIB7gDIO6aT1+R1kWMmax70UVtOzRwoAn9RK1ZrfUE4NUQPwQmYM41pmC6iaMAsqSqYEUug3sPHDFv8OyJDlbLRZU39Y8oosvhA9FHY9XbHn1asUmrrhad88oL2otgwIDIt4x9x4aBE/+motnL1wTnVnTwDq+djMf+HCgSWy43YHhPZWCODh9bPkGQjAnAcYgNmAau55Eu5SNHq0vY1SYOStkkb3HT8INe9u1QC8xYWcA0w6prNTXKCcWDLpDq3YSeeNXvOYkg6BZqYY6UTdT8gBw+JqIjMB6KIzihAbGTctNOip3WsAHbhl9vPaQQuaG+FY+2ldzHIkNXZJPI1Jba5Zy2MhCw6teJ0MG9X4iKRPpnJdVbKoT8bVSMkAvrHhO0pKsEhz6dOsOteXL9NNa98nB6Hul6+QKKm7dwFMKRhLDzty5iQB4/0SA/ANQxwNLGrSANKlAqRhR6p30VkIQEsJZiB1D/aGU3V7CageaBAA7zGp6NBzqgFNHFYC8RkL6GAUc9i02i9+Sg9GMbdrXgNkKDFX/bPN8P7xVmWUtwjQqpQ9qrYVPBhzkzryvQAATclKyCnSbVNyGlOICtwEEJS+k/LGQF7/26gHnDp/BvYe3u8zcOGEh+HRsml00JkL52DO9mpIOjjzyk10WB9oXd4UWsBc1N2VGDgP0GfuXr/It1pkEN7iyhvwqUANaWzbFtyclQs5mdnQp1c2nDj3T7jU8ZnifK8PcE5jH0AAQRYyGYkL61pMpQcaBsDtnvc7rIk8LpfS2FSW7GG9W1XpERwpzT5A+W90WAlOwNHq3WR7UeMcvSjmLsz34M/T9W+RA4agFrIEWFPWLzJWi3JtzrWg9QsP+AFlSQebVGnsl3wTmbmGx/mAdkIeUeA5DKBwNQIIvwfv+3vD22Tf4NoHZA0gAK179N5f8rdnoLd97mK0Ib1l85JJwACCfYCXVHwOC7dj1W+QZ0esmq01EgtMnqEZAN53W839fgCaujjHfbt9c7WoNhDG3/Vahtfsxjaiq0L1lCn9pqjy45V7CPgdqyqk43gqY72kiuMfq96h3zSAyesWKinBm4Ku+0+/gdIAL2r8Psx7L+aJOP81TE/suFyg3S3YsKIftPI+ub1AAGaYOQ2C63P54q7rSw8uWH6x56dOj07Jq64LhxXffx7jEdBXqmeAsKwggMDbRa0sZbthaeybeYlU1Oso1vimlAhZMXYZWBQTMROiVPHtR01ZzQ2OBeFd676tV4tdvGhIY1OT84wQJtyChR+2c5JJqAaWwKJX1oTxZsZ4Q6NnDa4REH+2Jq5d0G7ZMBA517IteoUlJzOPUdjDXZQlP8gQa6yhJGCPjRjYydVv9exLPjy45Pvz+2cmnfFgizEA9letiF2I7xCEbcXA9mRt2Pqc0iHsfVqa7fSpxrd7HgAXlPmzKF6eERWx4pgL44TtFgs7UmjZUAgW9EE9jeXsjY/p3ykEt9NfGIAwUHitdOXsYW4kVeY6UOKCNQoiVhEADALbwj2bGsK9dUpwO/1/BxAGbOhzd/fJTPUpA0iUimhktLAJVL4A6EW635YFi3XV1vjOF5NC6SLQ7evl5ZG8IclRIpkY60agWNj2SAusotMvvdu/22d048b/AZZkx24JpkHlAAAAAElFTkSuQmCC'
                        arrow="horizontal"
                        onClick={() => {
                            this.props.navigation.navigate('VersionList', {
                                itemId: 86,
                                otherParam: 'anything you want here',
                            });
                        }}
                    >
                        H5
                    </Item>
                    <Item
                        thumb="data:image/png;base64,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"
                        arrow="horizontal"
                        onClick={() => {
                            this.props.navigation.navigate('Feedback');
                        }}
                    >
                        反馈表单
                    </Item>
                    <Item
                        thumb="data:image/png;base64,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"
                        arrow="horizontal"
                        onClick={() => {}}
                    >
                        邮箱
                    </Item>
                    <Item
                        thumb="data:image/png;base64,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"
                        arrow="horizontal"
                        onClick={() => {}}
                    >
                        浏览器
                    </Item>
                    <Item
                        thumb="data:image/png;base64,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"
                        arrow="horizontal"
                        onClick={() => {}}
                    >
                        Google
                    </Item>
                    <Item
                        thumb="data:image/png;base64,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"
                        arrow="horizontal"
                        onClick={() => {}}
                    >
                        Dropbox
                    </Item>
                    <Item
                        thumb="data:image/png;base64,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"
                        arrow="horizontal"
                        onClick={() => {
                            Share.share(
                                {
                                    title: 'title',
                                    message: 'message',
                                    url: 'http://www.baidu.com'
                                }
                            )
                        }}
                    >
                        分享APP
                    </Item>
                </List>
                {/*<List renderHeader={() => 'swipe'}>*/}
                    {/*<SwipeAction*/}
                        {/*autoClose*/}
                        {/*style={{ backgroundColor: 'transparent' }}*/}
                        {/*right={right}*/}
                        {/*left={left}*/}
                        {/*onOpen={() => console.log('open')}*/}
                        {/*onClose={() => console.log('close')}*/}
                    {/*>*/}
                        {/*<Item*/}
                            {/*thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"*/}
                            {/*arrow="horizontal"*/}
                        {/*>*/}
                            {/*thumb*/}
                        {/*</Item>*/}
                    {/*</SwipeAction>*/}
                    {/*<SwipeAction*/}
                        {/*autoClose*/}
                        {/*style={{ backgroundColor: 'transparent' }}*/}
                        {/*right={right}*/}
                        {/*left={left}*/}
                        {/*onOpen={() => console.log('open')}*/}
                        {/*onClose={() => console.log('close')}*/}
                    {/*>*/}
                        {/*<List.Item extra="extra content">*/}
                            {/*Simple example: left and right buttons*/}
                        {/*</List.Item>*/}
                    {/*</SwipeAction>*/}
                    {/*<SwipeAction*/}
                        {/*autoClose*/}
                        {/*style={{ backgroundColor: 'transparent' }}*/}
                        {/*right={right}*/}
                        {/*left={left}*/}
                        {/*onOpen={() => console.log('open')}*/}
                        {/*onClose={() => console.log('close')}*/}
                    {/*>*/}
                        {/*<List.Item extra="extra content">*/}
                            {/*Simple example: left and right buttons*/}
                        {/*</List.Item>*/}
                    {/*</SwipeAction>*/}
                {/*</List>*/}
            </ScrollView>
        );
    }
}
// 把页面需要的state里的数据放在props上
const stateToProps = state => {
    return {
        user: state.user,
    }
};


const dispatchToProps = (dispatch) => ({
    logout: () => dispatch(UserAction.logout()),
});

// export default Settings
export default connect(stateToProps, dispatchToProps)(Settings)