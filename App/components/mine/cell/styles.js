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
    height: Platform.OS == 'ios' ? 70 : 50,
    // 下边框
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
    paddingRight: 5
  }
});


export default styles;
