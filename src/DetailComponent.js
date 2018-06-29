
import React, { Component } from 'react';
import {
    Text, View,TouchableOpacity
} from 'react-native';
import { ThirdScreen } from '../screenNames';
export default class DetailComponent extends Component {
    render() {        
       
        return (
            <View style={{ flex: 1, 
                    backgroundColor: 'mediumseagreen',
                    alignItems: 'center', 
                    justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
                    This is Detail Screen
                </Text>      
                <Text>Params from Main Screen: </Text>
               
               
                <TouchableOpacity
                style={{fontSize: 18, color: 'white', padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                    
                    onPress={() => {
                        this.props.navigation.navigate(ThirdScreen);
                    }}>
                    <Text>Navigate to Third</Text>
                    
                </TouchableOpacity>        
            </View>
        );
    }
}