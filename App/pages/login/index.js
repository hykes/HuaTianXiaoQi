import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

const LOGIN_IMG=require('./../../images/avatar.png');

export default class LoginView extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Image source={LOGIN_IMG} style={styles.iconStyle} />
                <TextInput keyboardType={'number-pad'} placeholder={'手机/邮箱'} style={styles.textInputStyle}  />
                <TextInput placeholder={'密码'} password={true} style={styles.textInputStyle} />
                <View style={styles.loginBtnStyle}>
                    <Text style={styles.loginTextStyle}>登录</Text>
                </View>
                <View style={styles.settingStyle}>
                    <Text style={styles.settingTextStyle}>无法登录?</Text>
                    <Text style={styles.settingTextStyle}>新用户注册</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7E7E7',
        // 设置侧轴对齐方式
        alignItems:'center',
    },
    iconStyle:{
        marginTop:50,
        marginBottom:10,
        width:80,
        height:80,
        borderWidth:2,
        borderColor:'white',
        borderRadius:40
    },
    textInputStyle:{
        height:44,
        width:screenW,
        backgroundColor:'white',
        marginBottom:1,
        textAlign:'center'
    },
    loginBtnStyle:{
        height:38,
        width:screenW * 0.85,
        backgroundColor:'#0080D6',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        borderRadius:3
    },
    loginTextStyle:{
        color:'white'
    },
    settingStyle:{
        width:screenW * 0.85,
        // 设置主轴的方向
        flexDirection:'row',
        // 主轴对齐方式
        justifyContent:'space-between',
        // 绝对定位
        position:'absolute',
        bottom:20,
        left:(screenW - screenW * 0.85) * 0.5,
    },
    settingTextStyle:{
        color:'#0080D6'
    },
});
