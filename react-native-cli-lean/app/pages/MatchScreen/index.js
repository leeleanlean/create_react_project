import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class RecordScreen extends Component {
  render () {
    return (
      <View style={{ backgroundColor: '#495060', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, color: '#fff' }}>赛事页面</Text>
      </View>
    );
  }
}