import React from 'react';
import { Image } from 'react-native';
import { View, Button, Text, Body, Right } from 'native-base';

const CustomButton = (props) => {
  return (
    
    <Button
      block
      onPress={props.onPress}
      style={{
        ...props.style,
        height: props.height || 40,
        width: props.width || 150,
        alignSelf: "center",
        borderRadius: (props.radius || 3),
        borderWidth: props.borderWidth || null,
        borderColor: props.borderColor || null,
        elevation: 0,
        paddingVertical: 0
      }}>
      <Text
        uppercase={false}
        style={{
          textAlign: "center",
          color: props.color || "#FFF",
          fontSize: props.fontSize || 15,
          fontWeight: 'bold'
        }}>
        {props.buttonText}</Text>
    </Button>
  )
}

export default CustomButton;
