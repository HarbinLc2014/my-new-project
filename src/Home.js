import React, { Component } from 'react';
import { View, Text, ListView, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
class Home extends Component {
  state = { options:
    [
      {
        name: '营养保健'
      },
      {
        name: '生活用品'
      },
      {
        name: '澳洲食品'
      }
  ],
  options2: [
    {
      name: '服装衣服'
    },
    {
      name: '女妆香水'
    },
    {
      name: '其他商品'
    }
  ]
};
  componentWillMount() {
    this.createDataSource(this.state.options, this.state.options2);
  }

  createDataSource(options, options2) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(options);
    this.dataSource2 = ds.cloneWithRows(options2);
  }
  renderRow(option) {
    return (
      <View style={{ width: SCREEN_WIDTH/3, height: SCREEN_HEIGHT/6, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 10 }}>
      <Text>{option.name}</Text>
      </View>
    );
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <View style={{ height: SCREEN_HEIGHT/6 }}>
      <ListView
      contentContainerStyle={{ alignItems: 'center', width: SCREEN_WIDTH, height: SCREEN_HEIGHT/6, backgroundColor: 'rgba(0,0,0,0.3)' }}
     initialListSize={2}
     horizontal
     enableEmptySections
     dataSource={this.dataSource}
     renderRow={this.renderRow.bind(this)}
      />
      </View>
      <View style={{ height: SCREEN_HEIGHT/6, marginTop: 0 }}>
      <ListView
      contentContainerStyle={{ alignItems: 'center', width: SCREEN_WIDTH, height: SCREEN_HEIGHT/6, backgroundColor: 'rgba(0,0,0,0.6)' }}
     initialListSize={2}
     horizontal
     enableEmptySections
     dataSource={this.dataSource2}
     renderRow={this.renderRow.bind(this)}
      />
      </View>
      </View>
    );
  }
}

export default Home;
