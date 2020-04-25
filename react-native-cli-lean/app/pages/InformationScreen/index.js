import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class RecordScreen extends Component {
  render () {
    return (
      <View style={{ backgroundColor: '#19be6b', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, color: '#fff' }}>资讯页面</Text>
      </View>
    );
  }
}