import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Test2 extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.navigator.push({name: 'test3'})
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleClick}>
          <View style={styles.padd}>
            <Text style={styles.welcome}>
              Test2
            </Text>
            <Text style={styles.instructions}>
              Click Here
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f39c12',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  padd: {
    padding: 40
  }
});
