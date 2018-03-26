import React, { Component } from 'react';
import {Text,View, LayoutAnimation} from 'react-native';
import { Header, Item, Icon, Input, Button } from 'native-base';
import Loader from './components/Loader';
import SearchBody from './components/SearchBody';
import SearchArea from './components/SearchArea';
import Home from './Home';

var Parse = require('parse/react-native');
import { AsyncStorage } from 'react-native';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
class Search extends Component {
  state = { onCall: true, onSearch: false};
  componentWillMount() {
    Parse.initialize("64bcfdfcfed7405051ff8b6eef1ac2f04d373923");
    Parse.serverURL = 'http://18.188.130.178:80/parse';
    /*
    var Gtest = Parse.Object.extend("Gtest");
var gtest = new Gtest();

gtest.set("hahaha", 1234);
gtest.set("name", "Rocky LC");

gtest.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});*/

  }
  renderBody() {
    if (this.state.onCall) {
    return <Home />;
  }
  return <Home />;
  }
  renderSearchArea() {
    if (this.state.onSearch) {
      return <SearchArea />;
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
      <Header
        searchBar
        rounded
      >
        <Item>
          <Icon name="ios-search" onPress={()=> console.log('asdasd')} />
          <Input
            placeholder="Search"
            onFocus={()=>    { LayoutAnimation.easeInEaseOut();this.setState({onSearch: true}) }}
            onBlur={()=> {LayoutAnimation.easeInEaseOut(); this.setState({ onSearch: false })}}
          />
        </Item>
      </Header>
        {this.renderSearchArea()}
          {this.renderBody()}

      </View>
    );
  }
}

export default Search;
