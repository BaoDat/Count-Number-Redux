import React, { Component } from 'react';
import {
    View, Text, Alert,
    StyleSheet
} from "react-native";
import { connect } from 'react-redux';


class ShowNumber extends Component {

    render() {
        return (
            <View>
                <Text style={styles.text} >{this.props.counter}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(mapStateToProps)(ShowNumber);

const styles = StyleSheet.create({
    text: {
        fontSize: 100,
        color: 'red',
    }
});