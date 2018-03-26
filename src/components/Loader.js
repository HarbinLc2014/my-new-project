import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

class Loader extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginBottom: 150 }}>
          <Bubbles size={25} color="#000" />
      </View>
    );
  }
}

export default Loader;
