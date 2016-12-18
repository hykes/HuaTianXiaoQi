'use strict';

import {
  StyleSheet
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

const styles = StyleSheet.create({
  // 导航栏
  container: {
    flexDirection: 'column',
    borderBottomColor: '#bbb',
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // 主轴方向
    flexDirection: 'row',
    // 侧轴对齐方式 垂直居中
    alignItems: 'center',
    // 主轴对齐方式
    justifyContent: 'space-around', // 平均分布
    height: 60
  },
  // 导航条左侧文字
  leftStyle: {
    color: '#000',
    paddingTop: 10,
    paddingBottom: 8,
    height: 40
  },
  // 标题
  leftText: {
    color: '#000',
    paddingTop: 20,
    width: 45,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  // 导航栏输入框
  searchInput: {
    fontSize: 12,
    width: screenW * 0.73,
    height: 28,
    backgroundColor: '#f1f2f6',
    marginTop: 25,
    // 圆角
    borderRadius: 15,
    paddingLeft: 20,
  },
  // 导航栏右侧图片
  rightIcon: {
    width: 36,
    height: 36,
    marginLeft: 10,
    marginTop: 16
  }
});

export default styles;
