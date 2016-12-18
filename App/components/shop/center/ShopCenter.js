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

import TitleView from './TitleView';
import ShopCenterItem from './ShopCenterItem';

import * as Constants from './const';

export default class ShopCenter extends Component{
    render() {
        return (
            <View style={styles.container}>
                <TitleView
                    leftIcon="gw"
                    leftTitle="本周推荐"
                    rightTitle="全部 >"
                />
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    }

    // 返回所有item
    renderAllItem(){
        var itemArr = [];
        var shopData = Constants.data;
        for (var i=0;i<shopData.length;i++){
            var data = shopData[i];
            itemArr.push(
                <ShopCenterItem
                    key={i}
                    image={data.img}
                    name={data.name}
                />
            )
        }
        return itemArr;
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
