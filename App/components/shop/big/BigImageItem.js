
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

export default class BigImageItem extends Component{

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
        padding: 10,
        backgroundColor: 'white'
    },
    imageStyle:{
        width: screenW -20,
        height: 230
    },
    shopNameStyle:{
      marginTop: 10,
      width: screenW,
      textAlign:'center',
      color:'#a1a1a1',
    }
});
