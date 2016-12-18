
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ShopCenterItem extends Component{

    render() {
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.itemViewStyle}>
                  <Image source={{uri: this.props.image}} style={styles.imageStyle}/>
                  <Text style={styles.shopNameStyle}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    itemViewStyle:{
        margin: 5
    },
    imageStyle:{
        width:180,
        height:180,
    },
    shopNameStyle:{
        width:180,
        textAlign:'center',
        // 定位
        position:'absolute',
        bottom: 10,
        backgroundColor:'#a1a1a1',
        color:'white',
    }
});
