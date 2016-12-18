'use strict';

import {
  StyleSheet,
  Platform
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // 主轴的方向
    flexDirection: 'row',
    // 主轴的对齐方式
    justifyContent: 'space-between',
    // 背景颜色
    backgroundColor: 'white',
    // 垂直居中
    alignItems: 'center',
    // 高度
    height: Platform.OS == 'ios' ? 45 : 40,
    // 下边框
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
    paddingRight: 5
  },
  leftViewStyle: {
    // 主轴的方向
    flexDirection: 'row',
    // 侧轴居中
    alignItems: 'center',
    // 左外边距
    marginLeft: 8
  },
  rightViewStyle: {

  },
  leftImgStyle: { // 左边的图片
    width: 35,
    height: 35,
    marginRight: 10,
    // 圆角
    borderRadius: 22
  },
  leftTitleStyle: {
    fontSize: 14
  },
  topRadiusStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  bottomRadiusStyle: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  }
});


export default styles;
