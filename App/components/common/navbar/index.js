import React, { Component } from 'react';

import { Image, Text, View, Navigator, TouchableOpacity } from 'react-native';

import NavigationBar from 'react-native-navbar';

import Styles from './styles';
import * as Constants from './const';

export default class NavBar extends Component {

  leftIconSelector(name){
    return Constants.IMG_GO_LEFT;
  }

  rightIconSelector(name){
    return Constants.IMG_SETTING;
  }

  // 左按钮
  renderleftNavBar(){
    if(this.props.leftIcon && this.props.leftIcon.length > 0){
      return(
        <View>
          <TouchableOpacity onPress={ this.props._onLeftPress }>
            <Image source={ this.leftIconSelector(this.props.leftIcon) } style={Styles.setting} />
          </TouchableOpacity>
        </View>
      )
    }
  }

  // 右按钮
  renderRightNavBar(){
    if(this.props.rightIcon && this.props.rightIcon.length > 0){
      return(
        <View>
          <TouchableOpacity onPress={ this.props._onRightPress }>
            <Image source={ this.rightIconSelector(this.props.rightIcon) } style={ Styles.setting } />
          </TouchableOpacity>
        </View>
      )
    }
  }

  // 标题
  renderTitleNavBar() {
    return (
      <View>
        <Text style={Styles.title}>
          { this.props.title }
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <NavigationBar
          title={ this.renderTitleNavBar() }
          leftButton={ this.renderleftNavBar() }
          rightButton={ this.renderRightNavBar() } />
      </View>
    );
  }
}
