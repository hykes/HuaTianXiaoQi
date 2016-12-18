'use strict';

import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f1f2f6',
  },
  tab: {
    height: 52,
    alignItems: 'center',
    backgroundColor: '#f4f5f6'
  },
  tabIcon: {
    width: 25,
    height: 25
  },
  selectedTitle: {
    color: '#000'
  }
});

export default styles;
