import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Component2 extends Component {
    render() {
        return (
            <View style={styles.myView}>
                <Text style={styles.myText} >Component2</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'purple'
    },
    myText: {
        color: '#fff'
    }
})

AppRegistry.registerComponent('Component2', () => Component2);
