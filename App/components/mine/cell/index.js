'use strict';

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import CellView from './../../common/cell/index';
import Styles from './../../common/cell/styles';
import * as Constants from './../../common/cell/const';
import * as MConstants from './const';
import MStyles from './styles';

export default class Cell extends CellView{

  iconSelector(name){
    if("posted" === name){
      return MConstants.IMG_POSTED;
    }else if("msg" === name){
      return MConstants.IMG_MSG;
    }else if("order" === name){
      return MConstants.IMG_ORDER;
    }else if("cart" === name){
      return MConstants.IMG_CART;
    }else if("point" === name){
      return MConstants.IMG_POINT;
    }
    return Constants.IMG_OTHER;
  }

  renderView() {
    return (
      <View style={[MStyles.container, this.props.top && Styles.topRadiusStyle, this.props.bottom && Styles.bottomRadiusStyle]}>
        <View style={Styles.leftViewStyle}>
          { this.renderLeftIcon() }
          <Text style={Styles.leftTitleStyle}>{this.props.leftTitle}</Text>
        </View>
        <View style={Styles.rightViewStyle}>
          { this.renderRightView() }
        </View>
      </View>
    );
  }

};
