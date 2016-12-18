import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    ScrollView,
    Platform
} from 'react-native';

import Styles from './styles';
import * as Constants from './const';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

class MenuPager extends Component{

    constructor(props){
      super(props);
      this.state={
        activePage: 0,
        menuData: this.props.menuData
      }
    }

    dataSource(data){
      return new ListView.DataSource({rowHasChanged:(row1,row2)=>row1 !== row2}).cloneWithRows(data);
    }

    render() {
      return (
        <View style={Styles.container}>
          {/* 菜单 */}
            {this.renderScrollView()}
          {/* 页码 */}
          <View style={{ flexDirection:'row', justifyContent:'center'}}>
            {this.renderIndicator()}
          </View>
        </View>
      )
    }

    renderList(i,data) {
        return (
            <ListView key={i}
                dataSource={this.dataSource(data)}
                renderRow={this.renderRow}
                contentContainerStyle={Styles.contentViewStyle}
                scrollEnabled={false}
            />
        )
    }

    // 返回具体的一行
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.8}>
                <View style={Styles.cellStyle}>
                    <Image source={Constants.IMG_DEFAULT} style={{width:52,height:52}} />
                    <Text style={Styles.titleStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    // 当一帧滚动结束的时候调用
    onScrollAnimationEnd(e){
        // 计算当前页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / screenW);
        // 更新状态机
        this.setState({
          activePage: currentPage
        });
    }

    renderScrollView(){
      if(this.state.menuData.lenght > 1){
        return (
          <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(e)=>this.onScrollAnimationEnd(e)}
          >
            { this.renderScrollItem() }
          </ScrollView>
        )
      }else{
        return (
          <View>
          { this.renderScrollItem() }
          </View>
        )
      }
    }

    // 返回子视图
    renderScrollItem(){
        let itemArr = [];
        for (let i=0;i<this.state.menuData.length;i++){
            itemArr.push(this.renderList(i,this.state.menuData[i]));
        }
        return itemArr;
    }

    // 返回页码视图
    renderIndicator(){
      let indicatorArr = [],style;
      if(this.state.menuData.length>1){
        for (let i=0;i<this.state.menuData.length;i++){
            // 设置圆点的样式
            style = (i == this.state.activePage) ? {color:'orange'} : {color:'gray'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
      }
    }
};

MenuPager.propTypes = {

};
MenuPager.defaultProps = {

};

// 输出
export default MenuPager;
