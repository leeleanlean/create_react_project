import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

// 资讯页面
import InformationScreen from './app/pages/InformationScreen';
// 赛事页面
import MatchScreen from './app/pages/MatchScreen';
// 战绩页面
import RecordScreen from './app/pages/RecordScreen';
import RecordDetailScreen from './app/pages/RecordDetailScreen';

// 底部菜单路由
const AppNavigator = createBottomTabNavigator({
  // 资讯TAB
  Information: {
    screen: InformationScreen,
    navigationOptions: {
      title: '资讯',
      tabBarIcon: '',
    },
  },
  // 赛事TAB
  Match: {
    screen: MatchScreen,
    navigationOptions: {
      title: '赛事',
      tabBarIcon: '',
    },
  },
  // 战绩TAB
  Record: {
    screen: RecordScreen,
    navigationOptions: {
      title: '战绩',
      tabBarIcon: '',
    },
  },
}, {
  initialRouteName: 'Record',
  tabBarOptions: {
    activeTintColor: '#f90',
  },
});

// 根路由
const RootStack = createStackNavigator({
  HomeTab: {
    screen: AppNavigator,
    navigationOptions: {
      header: null,
    },
  },
  RecordDetail: {
    screen: RecordDetailScreen,
  },
}, {
  initialRouteName: '',
});

export default createAppContainer(RootStack);
