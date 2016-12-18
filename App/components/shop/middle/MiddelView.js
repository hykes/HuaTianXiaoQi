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

// 导入外部的组件类
import SmallImageItem from './smallImageItem';

// 导入json数据
import MiddleJSON from './MiddleJSON';

// ES5
export default class MiddelView extends Component {

    render() {
        return (
            <View style={styles.container}>
                {this.renderLeftView()}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    }

    // 左边视图
    renderLeftView(){
        // 取出对应的数据
        var data = MiddleJSON.dataLeft[0];
        return(
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{alert('点击了')}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:"https://avatars1.githubusercontent.com/u/6905598?v=3&s=460"}} style={styles.leftImgStyle} />
                    <Text style={{color:'gray'}}>{data.title}</Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={{color:'blue',marginRight:5}}>{data.price}</Text>
                        <Text style={{color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    // 右边视图
    renderRightView(){
        var itemArr = [];
        var rightData = MiddleJSON.dataRight;
        for (var i=0;i<rightData.length;i++){
            var data = rightData[i];
            itemArr.push(
                <SmallImageItem
                    key={i}
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                />
            );
        }
        return itemArr;
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        flexDirection:'row',
    },
    leftViewStyle:{
        width:screenW * 0.5,
        height:119,
        backgroundColor:'white',
        marginRight:1,
        alignItems:'center',
        justifyContent:'center',
    },
    leftImgStyle:{
        width:120,
        height:60,
        // 图片内容模式
        resizeMode:'contain'
    },
});
