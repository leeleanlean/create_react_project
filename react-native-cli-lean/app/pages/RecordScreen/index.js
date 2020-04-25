import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  StatusBar
} from 'react-native';

// 引入全局样式文件
import CommonStyles from '../../common/styles'
import api from '../../data/api/RecordScreen/index'

// 获取屏幕宽高
const { height, width } = Dimensions.get('window');

export default class RecordScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    api.baidu({
      url: 'http://www.baidu.com',
      methos: 'GET',
      headers: {},
      params: {}
    }).then(() => {alert(1)}).catch(() => {alert(2)})
    return (
      <View style={styles.container}>
        {/* StatusBar */}
        <StatusBar barStyle={'light-content'} />
        {/* ImageBackground */}
        <ImageBackground
          source={require('../../assets/images/bg.jpg')}
          style={styles.bgImg}>
          <View style={{
            flex: 1,
            width: width,
            justifyContent: 'center',
            backgroundColor: CommonStyles.gray,
            paddingLeft: CommonStyles.navMarginLeft,
            paddingRight: CommonStyles.navMarginRight
            } }>
            {/* 绑定Steam */}
            <View>
              <Text style={{ fontSize: 16, color: CommonStyles.white} }>绑定Steam</Text>
            </View>
            {/* 查询战绩 */}
            <View>
              <Text style={{ fontSize: 16, color: CommonStyles.white} }>查询战绩</Text>
              <Text style={{ fontSize: 16, color: CommonStyles.white} }>查询战绩</Text>
            </View>
            {/* 搜索历史 */}
            <View>
              <Text style={{ fontSize: 16, color: CommonStyles.white }}>搜索历史 {CommonStyles.red}</Text>
            </View>
            <Button
              onPress={() => navigate('RecordDetail', { name: 'Lean' })}
              title="查看战绩详情"
              color="#fff"
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImg: {
    flex: 1,
    width: width,
    height: height
  },
  content: {
    alignItems: 'center'
  }
});
