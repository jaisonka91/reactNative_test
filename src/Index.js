import React, { Component } from 'react';
import {StyleSheet, Navigator, BackAndroid, View} from 'react-native';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
let ROUTES = {
  test1: Test1,
  test2: Test2,
  test3: Test3
}

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', function() {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

export default class TestNative extends Component {
  constructor() {
    super()
    this._configureScene = this._configureScene.bind(this);
    this._renderscene = this._renderscene.bind(this);
  }
  _configureScene(){
    return Navigator.SceneConfigs.FloatFromBottom;
  }
  _renderscene(route, navigator){
    _navigator = navigator;
    var Component = ROUTES[route.name];
    return (
      <View style={styles.container}>
        <Component route={route} navigator={navigator}/>
      </View>
    )
  }


  render(){
    return(
      <Navigator initialRoute={{name: 'test1'}} renderScene={this._renderscene} configureScene={this._configureScene}>
      </Navigator>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    borderRadius: 10,
    flex: 1,
    overflow: 'hidden',
    padding: 5
  }
});
