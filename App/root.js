'use strict';

import React, { Component } from 'react';
import { View, Navigator } from 'react-native';

import Index from './pages/index/index';
import Styles from './styles';

export default class Root extends Component {

  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  /**
   * 渲染场景, 通过不同参数, 设置不同页面
   * @param route 路由, 场景信息
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  //renderScene(route, navigator) {
  //  if (route.name == 'FirstPage') {
  //    return <FirstPage navigator={navigator} {...route.passProps}/>
  //  } else if (route.name == 'SecondPage') {
  //    return <SecondPage navigator={navigator} {...route.passProps}/>
  //  }
  //}

  /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
  configureScene(route, routeStack) {
    if (route.type == 'FloatFromBottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }

  render(){
    return(
      <View style={Styles.container}>
        <Navigator
          style={Styles.navigator}
          initialRoute={{component: Index, index: 0}}
          configureScene={this.configureScene}
          renderScene={this.renderScene}/>
      </View>
    );
  }
}
