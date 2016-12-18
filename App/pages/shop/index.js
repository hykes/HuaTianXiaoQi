'use strict';

import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';

import ViewPager from 'react-native-viewpager';

import Styles from "./styles";
import * as Constants from './const';
import SearchBar from "./../../components/common/searchBar/index";
import MenuPager from './../../components/common/menuPager/index';

import MiddelView from './../../components/shop/middle/MiddelView';
import MiddleBottom from './../../components/shop/middle/MiddleBottomView';
import MiddleCenter from './../../components/shop/center/ShopCenter';
import BigImageView from './../../components/shop/big/BigImageView';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

import SearchView from './../search/index';

export default class Shop extends Component {

  constructor(props) {
      super(props);
      // 用于构建DataSource对象
      var dataSource = new ViewPager.DataSource({
          pageHasChanged: (p1, p2) => p1 !== p2,
      });
      // 实际的DataSources存放在state中
      this.state = {
          activePage:0,
          dataSource: dataSource.cloneWithPages(Constants.BANNER_IMGS)
      }
  }

  _webview(name, url, type = 'Normal') {
    this.props.navigator.push({
      component: SearchView,
      passProps: {
        name: name,
        url: url
      },
      type: type
    })
  }

  _renderPage(data, pageID) {
    return (
      <Image
        source={data}
        style={Styles.page}/>
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <SearchBar {...this.props}/>
        <ScrollView>
          {/*banner*/}
          <ViewPager
              style={{height:130}}
              dataSource={this.state.dataSource}
              renderPage={this._renderPage}
              isLoop={true}
              autoPlay={true}/>
          {/*菜单*/}
          <MenuPager menuData={Constants.MENU_DATA} />
          {/*本周推荐*/}
          <MiddleCenter />
          {/*一千零一夜*/}
          <BigImageView _onPress={()=>this._webview("搜索","https://m.baidu.com/")} />
          <MiddelView />
          <MiddleBottom />

        </ScrollView>
      </View>
    );
  }

}
