import React, { Component } from 'react';

import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Styles from './styles';
import * as Constants from './const';

export default class Header extends Component {

  renderTopView(){
    return(
      <View style={Styles.topViewStyle}>
        <Image source={{uri: "https://avatars1.githubusercontent.com/u/6905598?v=3&s=460"}} style={Styles.centerIconStyle} />
        <View style={Styles.conterViewStyle}>
          <Text style={Styles.conterTextStyle}>何海洋</Text>
          <Text style={Styles.conterSignStyle}>这个家伙很懒，什么也没留下...</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={Styles.container}>
        { this.renderTopView() }
      </View>
    );
  }

}
