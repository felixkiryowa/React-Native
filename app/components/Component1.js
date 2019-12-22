import { AppRegistry, Text, View, Button, Alert, DrawerLayoutAndroid, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Component1 extends Component {


    constructor(props) {
        super(props);

        this.state = {
            name: 'Franco',
            showName: false,
            message: this.props.message,
            chosenDate: ''

        }

       
    }

    render() {

        const { name, showName, message } = this.state;
        const show = showName ? name : 'No name';
        return ( 
        <View>
            <Text > { message } </Text>
             <Text> { show } </Text> 
              <Button title = "Press me"
            disabled onPress = {
                () => Alert.alert('Simple Button pressed')
            }
            />
            
        </View >
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})


AppRegistry.registerComponent('Component1', () => Component1);