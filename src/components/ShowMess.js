import React, { Component } from 'react';
import {
    View, Text, Alert,
    StyleSheet
} from "react-native";
import { connect } from 'react-redux';


class ShowMess extends Component {

    render() {
        return (
            <View>
                {Alert.alert(
                    'Alert Title',
                    this.props.alo,
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )}
            </View>
        )
    }
}

const mapStateToProps = state => ({
    alo: state.mess
});

export default connect(mapStateToProps)(ShowMess);

