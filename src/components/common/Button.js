import React, { Component } from 'react';
import {View, Text } from 'react-native';

const Button = (props) => {
  const { buttonStyle, buttonText } = styles;

  return (
    <View style={buttonStyle}>
      <Text style={buttonText}>{props.value}</Text>
    </View>
  );
};

const styles = {
  buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
};

export { Button };