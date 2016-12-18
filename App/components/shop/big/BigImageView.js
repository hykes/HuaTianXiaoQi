import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import TitleView from './../center/TitleView';
import BigImageItem from './BigImageItem';

export default class BigImageView extends Component{
    render() {
        return (
            <View style={styles.container}>
                <TitleView
                    leftIcon="gw"
                    leftTitle="一千零一夜蛋筒花"
                    rightTitle="全部 >"
                    _onPress={this.props._onPress}
                />
                <BigImageItem
                    image="https://avatars1.githubusercontent.com/u/6905598?v=3&s=460"
                    name="情寄普罗旺斯"
                />
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        marginTop:10,
    },
    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10,
    }
});
