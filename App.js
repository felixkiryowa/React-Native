import React, { Component } from 'react'
import { AppRegistry, View  } from 'react-native';
import Component1   from './app/components/Component1';
import Component2 from './app/components/Component2';



export default class App extends Component {
   render() {
     return (
       <View>
          <Component1 message='Hello world' />
          <Component2 />
       </View>
     )
   }
}

AppRegistry.registerComponent('App', () => App);