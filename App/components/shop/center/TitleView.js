import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Constants from './const';

export default class TitleCell extends Component {

    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={this.props._onPress}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={Constants.IMG_DEFAULT}  style={{width:35,height:35}} />
                        <Text style={{fontSize:14}}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <Text style={{color:'gray',fontSize:12}}>{this.props.rightTitle}</Text>
                        <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:10,marginLeft:5}} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection:'row',
        height:44,
        justifyContent:'space-between',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
});
