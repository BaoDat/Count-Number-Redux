import React, { Component } from 'react';
import {
    View, Text, Alert,
    TouchableOpacity
} from "react-native";
const Buttons = props => {
    const { title, bgColor, onClick } = props;
    return (
        <TouchableOpacity
            style={{ backgroundColor: bgColor, alignContent: "center", alignItems: 'center', margin: 20 }}
            onPress={onClick}>
            <Text style={{ fontSize: 30 }}>{title}</Text>
        </TouchableOpacity>
    )
};

export default Buttons;
