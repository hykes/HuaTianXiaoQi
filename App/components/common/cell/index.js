'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Switch
} from 'react-native';

import Styles from './styles';
import * as Constants from './const';

export default class Cell extends Component{

  constructor(props){
    super(props);
    this.state={
      isOn:false
    }
  }

  iconSelector(name){
    return Constants.IMG_OTHER;
  }

  render() {
    if(this.props.isSwitch){
       return(
          <View>
           { this.renderView() }
          </View>
       )
    }else{
      return(
        <TouchableOpacity onPress={ this.props._onPress }>
          { this.renderView() }
        </TouchableOpacity>
      )
    }
  }

  renderView() {
    return (
      <View style={[Styles.container, this.props.top && Styles.topRadiusStyle, this.props.bottom && Styles.bottomRadiusStyle]}>
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

  // cell左侧icon
  renderLeftIcon(){
    if(this.props.iconName && this.props.iconName.length > 0){
      return(
        <Image source={ this.iconSelector(this.props.iconName) } style={Styles.leftImgStyle} />
      )
    }
  }

  // cell右侧视图
  renderRightView(){
    if(this.props.isSwitch){
       return(
         <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} />
       )
    }else{
      return(
        <View style={{flexDirection:'row',alignItems:'center'}}>
          {this.renderRightContent()}
          <Image source={Constants.IMG_GO_RIGHT} style={{width:20, height:20}} />
        </View>
      )
    }
  }

  // cell右侧title
  renderRightContent(){
    if(this.props.rightTitle && this.props.rightTitle.length > 0){
      return(
        <Text style={{color:'gray', fontSize: 10}}>{this.props.rightTitle}</Text>
      )
    }
  }

};
