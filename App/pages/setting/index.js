
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import NavBar from "./../../components/common/navbar/index";
import Cell from './../../components/common/cell/index';

import Styles from './styles';

import Login from './../login/index';

export default class Setting extends Component{

  _onLogin(type = 'Normal') {
    this.props.navigator.push({
      component: Login,
      passProps: {
        title: '设置'
      },
      type: type
    })
  }

  render() {
    return (
        <View style={Styles.container}>
            <NavBar title="设置" leftIcon="left" _onLeftPress={()=>this.props.navigator.pop()} />
            <ScrollView>
                <View style={ Styles.CommonView }>
                    <Cell
                        leftTitle="个人资料" top={true}
                    />
                    <Cell
                        leftTitle="帐号管理"
                    />
                    <Cell
                        leftTitle="帐号绑定"
                    />
                    <Cell
                        leftTitle="积分规则"
                    />
                    <Cell
                        leftTitle="认证规则" bottom={true}
                    />
                </View>
                <View style={ Styles.CommonView }>
                    <Cell
                      leftTitle="关于花田小憩" top={true}
                    />
                    <Cell
                      leftTitle="商业合作"
                    />
                    <Cell
                      leftTitle="意见反馈"
                    />
                    <Cell
                      leftTitle="给我们评分" bottom={true}
                    />
                </View>
                <View style={ Styles.CommonView }>
                    <Cell
                      leftTitle="清理缓存"
                      rightTitle="1.99M" top={true}
                    />
                    <Cell
                      leftTitle="启动推送"
                      isSwitch={true} bottom={true}
                    />
                </View>

                <View style={ Styles.CommonView }>
                    <Cell _onPress={ ()=>this._onLogin() }
                        leftTitle="退出登录" top={true} bottom={true}
                    />
                </View>
            </ScrollView>
        </View>
    );
  }

};
