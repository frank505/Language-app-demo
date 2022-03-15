import React from 'react';
import { TouchableOpacity,Text, StyleProp, StyleSheet } from 'react-native';
import { SubmitButtonType } from './types';




const SubmitButton:React.FC<SubmitButtonType> = (
    {
        backgroundColor,
        width,
        height,
        textColor,
        onPress,
        disabled,
        textString,
        testID
       }) =>
{
 return (
    <TouchableOpacity
    testID={testID}
    onPress={onPress}
    disabled={disabled}
    style={[styles.button, {backgroundColor:backgroundColor,
    width:width,height:height}]}>
       <Text style={[styles.text,{color:textColor}]}>{textString}</Text>
   </TouchableOpacity>
 )
}


const styles:StyleProp<any> = StyleSheet.create({
    button:{
        alignItems:'center',
    justifyContent:'center',
    borderRadius:20
    },
    text:{
    fontWeight:'bold'
    }
})


export default SubmitButton;



