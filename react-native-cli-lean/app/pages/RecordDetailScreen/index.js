import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class RecordScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    // 获取路由传的值
    const name = this.props.navigation.state.params.name;
    return (
      <View style={{ backgroundColor: '#495060', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, color: '#fff' }}>RecordDetailScreen</Text>
        <Text style={{ fontSize: 16, color: '#fff' }}>{name}</Text>
      </View>
    );
  }
}