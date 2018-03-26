import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './src/Search';
import Setting from './src/Setting';
import Order from './src/Order';
import MyOrder from './src/MyOrder';
import ShareModal from './src/Wechat';

export default class App extends React.Component {
  render() {
    return (

        <Order />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
