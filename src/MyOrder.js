import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, LayoutAnimation } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class MyOrder extends Component {
  render(){
    return (
      <View style={{ flex: 1, paddingTop: 100 }}>
      <View style={{ width: SCREEN_WIDTH, height: 40, flexDirection: 'row', alignItems: 'center', borderColor: '#d1d1d1', borderWidth: 1 }}>
      <TouchableOpacity style={{ width:SCREEN_WIDTH/3, height: 40, alignItems: 'center', justifyContent: 'center', borderColor: '#d1d1d1', borderWidth: 1 }}>
      <Text style={{ fontSize: 20, color: 'blue' }}>待发货</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width:SCREEN_WIDTH/3, height: 40, alignItems: 'center', justifyContent: 'center', borderColor: '#d1d1d1', borderWidth: 1 }}>
      <Text style={{ fontSize: 20, color: 'blue' }}>已发货</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width:SCREEN_WIDTH/3, height: 40, alignItems: 'center', justifyContent: 'center', borderColor: '#d1d1d1', borderWidth: 1 }}>
      <Text style={{ fontSize: 20, color: 'blue' }}>已关闭</Text>
      </TouchableOpacity>
      </View>

      </View>
);
}
}

export default MyOrder;
