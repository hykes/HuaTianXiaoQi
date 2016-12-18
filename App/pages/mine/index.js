'use strict';

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import NavBar from "./../../components/common/navbar/index";
import Header from "./../../components/mine/header/index";
import Cell from "./../../components/mine/cell/index";
import Styles from "./styles";

import Setting from "./../setting/index";

export default class Mine extends Component {

  _onPress(){
    alert('点击了');
  }

  _onRightPress(type = 'Normal') {
    this.props.navigator.push({
      component: Setting,
      passProps: {
        title: '设置'
      },
      type: type
    })
  }

  render() {
    return (
      <View style={Styles.container}>
        <NavBar title={ this.props.title }
          rightIcon="right" _onRightPress={()=>this._onRightPress()} />
        <ScrollView>
          <Header />
          <View style={{marginTop:10}}>
            <Cell
              leftTitle="我的发布"
              iconName="posted"
              _onPress={ ()=>this._onPress() }
            />
            <Cell
              leftTitle="我的消息"
              iconName="msg"
            />
          </View>
          <View style={{marginTop:10}}>
            <Cell
              leftTitle="我的订单"
              iconName="order"
            />
            <Cell
              leftTitle="购物车"
              iconName="cart"
            />
            <Cell
              leftTitle="积分兑换"
              rightTitle="现有积分：100"
              iconName="point"
            />
          </View>
          <View style={{marginTop:10}}>
            <Cell
              leftTitle="其他"
              iconName="other"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
