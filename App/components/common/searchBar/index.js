import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';

import Styles from './styles';
import * as Constants from './const';

export default class SearchBar extends Component{

  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={ this.props._onLeftPress} >
          <Text style={Styles.leftText}>杭州</Text>
        </TouchableOpacity>
        <TextInput placeholder="输入商家,品类,商圈" style={Styles.searchInput} />
        <TouchableOpacity onPress={()=>{alert('点击了')}} >
          <Image source={Constants.IMG_CAMERA} style={Styles.rightIcon} />
        </TouchableOpacity>
      </View>
    )
  }

};
