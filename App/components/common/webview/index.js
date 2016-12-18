'use strict';

import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, WebView, Text, View } from 'react-native';

export default class MyWebView extends Component {

  render() {
    return (
        <WebView
          automaticallyAdjustContentInsets={false}
          style={{ backgroundColor: 'rgba(255,255,255,0.8)', height: 350 }}
          source={{uri: this.props.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          scalesPageToFit={true}
        />
    );
  }

}

const styles = StyleSheet.create({
  // 按钮
  button: {
    height: 60,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#eeeeee',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    fontSize: 18
  }
});
