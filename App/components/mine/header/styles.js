'use strict';

import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  topViewStyle: {
    flexDirection: 'column',
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  centerIconStyle: {
    flexDirection: 'column',
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  conterViewStyle: {
    flexDirection: 'column',
    marginTop: 10
  },
  conterTextStyle: {
    fontSize:18,
    color: '#000',
    textAlign:'center'
  },
  conterSignStyle: {
    fontSize:12,
    textAlign:'center',
    marginTop: 10,
    color:'#a1a1a1'
  }
});

export default styles;
