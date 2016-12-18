'use strict';

import {
  StyleSheet,
  Platform
} from 'react-native';


var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

const cellW = Platform.OS == 'ios' ? 70 : 60;
const cellH = 70;
// 全局常量
const cols = 4;

const vMargin = (screenW - cellW * cols) / (cols + 1);

const styles = StyleSheet.create({
  contentViewStyle:{
      flexDirection:'row',
      flexWrap:'wrap',
      width:screenW,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: 'white',
      paddingBottom: 20
  },
  cellStyle:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:10,
      width:cellW,
      height:cellH,
      marginLeft:vMargin,
  },
  titleStyle:{
      fontSize:Platform.OS == 'ios' ? 14 : 12,
      color:'gray'
  },
  container:{
    flexDirection:'column',
    justifyContent:'center'
  }
});


export default styles;
