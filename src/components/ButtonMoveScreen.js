import React, { Component } from 'react'
import Main from "../../App"
import {
    View,
    TouchableOpacity,
    Text

} from 'react-native'
import {
    createStackNavigator,

} from "react-navigation";

export const ButtonMoveScreen = props => {
    const { title, bgColor, onClick } = props;
    return (
        <TouchableOpacity
            style={{ backgroundColor: bgColor, alignContent: "center", alignItems: 'center', margin: 20 }}
            onPress={this.gotoScreen}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

class DetailScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

gotoScreen = () => {
    this.props.navigation.navigate('ScreenTow');
};

export default createStackNavigator(
    {
        Detail: {
            screen: DetailScreen
          },
          Home: {
            screen: Main
          },
    },
    
);