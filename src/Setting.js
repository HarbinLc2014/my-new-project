import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, LayoutAnimation } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Setting extends Component {
  state = { order: true };
  showOrder() {
    this.setState({ order: !this.state.order });
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderOrder() {
    if(this.state.order){
    return (
      <View style={{ width: SCREEN_WIDTH, height: 40, flexDirection: 'row', alignItems: 'center', borderColor: '#d1d1d1', borderWidth: 1 }}>
      <TouchableOpacity style={{ width:SCREEN_WIDTH/3, height: 40, alignItems: 'center', justifyContent: 'center', borderColor: '#d1d1d1', borderWidth: 1 }}>
      <Text style={{ fontSize: 20, color: 'blue' }}>收藏夹</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width:SCREEN_WIDTH/3, height: 40, alignItems: 'center', justifyContent: 'center', borderColor: '#d1d1d1', borderWidth: 1 }}>
      <Text style={{ fontSize: 20, color: 'blue' }}>购物车</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width:SCREEN_WIDTH/3, height: 40, alignItems: 'center', justifyContent: 'center', borderColor: '#d1d1d1', borderWidth: 1 }}>
      <Text style={{ fontSize: 20, color: 'blue' }}>我的订单</Text>
      </TouchableOpacity>
      </View>
    );
  }
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 100 }}>
      {this.renderOrder()}

      </View>
    );
  }
}

export default Setting;
