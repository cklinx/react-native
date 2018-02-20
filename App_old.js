import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar,
  Navigator
} from 'react-native';
import HelloWorldApp from './Components/HelloWorldApp';
import Bananas from './Components/Bananas';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#16a085"
          barStyle="default"
        />
        <ToolbarAndroid style={styles.toolbar}
          logo={require('./images/logo.png')}
          title="AwesomeApp"
          actions={[{title: 'Settings', icon: require('./images/logo.png'), show: 'always'}]}
        />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reloadsss.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <HelloWorldApp/>
        <Bananas/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
    alignSelf: 'stretch',
   },
})
