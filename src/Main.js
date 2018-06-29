import React, { Component } from 'react';
import {
    View, Text, Alert, TouchableOpacity
} from 'react-native'
import Buttons from './components/Buttons'
import ShowNum from './components/ShowNumber'
import DisplayMess from './components/ShowMess'
import * as actions from './actions';
import { connect } from 'react-redux';


import DetailComponent from './DetailComponent'
import { StackNavigator } from 'react-navigation';

class Main extends Component {
    handleIncrease = () => {
        this.props.counterIncrease();

    };

    handleDecrease = () => {
        this.props.counterDecrease();
    };

    showMessage = () => {
        this.props.showMess();
    };


    render() {
        const { navigation } = this.props;
        return (

            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center'
            }}>
                <View style={{ alignItems: 'center' }}>
                    <ShowNum />
                </View>
                <View style={{ flex: 1, }}>
                    <Buttons
                        title="Increase"
                        textColor="#fff"
                        bgColor="#397af8"
                        onClick={this.handleIncrease} />
                    <Buttons
                        title="Decrease"
                        bgColor="orange"
                        onClick={this.handleDecrease} />
                    <Buttons
                        title="Show Mess"
                        bgColor="orange"
                        onClick={this.showMessage} />

                    <DisplayMess />
                    <TouchableOpacity
                        style={{ fontSize: 18, color: 'white', padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}

                        onPress={() => {
                            this.props.navigation.navigate('Main');
                        }}>
                        <Text>Navigate to Third</Text>

                    </TouchableOpacity>

                </View>

            </View>)
    }
};

StackNavigator({
    Home: {
        screen: Main
    },
    Detail: {
        screen: DetailComponent
    },

});


export default connect(null, actions)(Main);



