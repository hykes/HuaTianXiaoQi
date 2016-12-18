import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import NavBar from "./../../components/common/navbar/index";
import MyWebView from './../../components/common/webview/index';
import Styles from './styles';

export default class SearchView extends Component{

  render() {
    return (
        <View style={Styles.container}>
            <NavBar title={this.props.name} leftIcon="left" _onLeftPress={()=>this.props.navigator.pop()} />
            <MyWebView url={this.props.url}/>
        </View>
    );
  }

};
