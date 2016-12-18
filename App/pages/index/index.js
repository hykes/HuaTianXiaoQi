'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem = TabNavigator.Item;

import Styles from './styles';
import * as Constants from './const';
import Mine from './../mine/index';
import Shop from './../shop/index';

export default class Index extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedTab:'Shop'
    }
  }

  /**
   * tab点击方法
   */
  onPress(tabName){
    if(tabName){
      this.setState({
       selectedTab:tabName
      });
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        <TabNavigator tabBarStyle={Styles.tab}>
          <TabNavigatorItem
            title={Constants.TAB_SHOP}
            renderIcon={()=><Image style={Styles.tabIcon} source={Constants.IMG_SHOP}/>}
            renderSelectedIcon={()=><Image style={Styles.tabIcon} source={Constants.IMG_SHOP_SELECT}/>}
            selected={this.state.selectedTab==='Shop'}
            selectedTitleStyle={Styles.selectedTitle}
            onPress={()=>this.onPress('Shop')}
          >
            <Shop {...this.props} title="商城" />
          </TabNavigatorItem>
          <TabNavigatorItem
            title={Constants.TAB_MINE}
            renderIcon={()=><Image style={Styles.tabIcon} source={Constants.IMG_MINE}/>}
            renderSelectedIcon={()=><Image style={Styles.tabIcon} source={Constants.IMG_MINE_SELECT}/>}
            selected={this.state.selectedTab==='Mine'}
            selectedTitleStyle={Styles.selectedTitle}
            onPress={()=>this.onPress('Mine')}
          >
            <Mine {...this.props} title="我的" />
          </TabNavigatorItem>
        </TabNavigator>
      </View>
    );
  }

  // <TabNavigatorItem
  //   title={Constants.TAB_WALLPAPER}
  //   renderIcon={()=><Image style={Styles.tabIcon} source={Constants.IMG_TOPIC}/>}
  //   renderSelectedIcon={()=><Image style={Styles.tabIcon} source={Constants.IMG_TOPIC_SELECT}/>}
  //   selected={this.state.selectedTab==='Wallpaper'}
  //   selectedTitleStyle={Styles.selectedTitle}
  //   onPress={()=>this.onPress('Wallpaper')}
  // >
  //   <Text>墙纸</Text>
  // </TabNavigatorItem>
  // <TabNavigatorItem
  //   title={Constants.TAB_CLUB}
  //   renderIcon={()=><Image style={Styles.tabIcon} source={Constants.IMG_TOPIC}/>}
  //   renderSelectedIcon={()=><Image style={Styles.tabIcon} source={Constants.IMG_TOPIC_SELECT}/>}
  //   selected={this.state.selectedTab==='Club'}
  //   selectedTitleStyle={Styles.selectedTitle}
  //   onPress={()=>this.onPress('Club')}
  // >
  //   <Text>社区</Text>
  // </TabNavigatorItem>

}
