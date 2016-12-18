'use strict';

import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  // 页面框架
  container: {
    flexDirection: 'column',
    borderBottomColor: '#bbb',
    height: 60,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  titleView: {
    height: 40
  },
  // 标题
  title: {
    fontSize: 18,
    color: '#000',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  // 导航条上图片
  setting: {
    width: 36,
    height: 36,
    paddingRight: 10
  },
});

export default styles;
