import React from 'react';
import { TouchableOpacity,Text,StyleSheet,StyleProp } from 'react-native';
import { colors } from '../theme/colors';
import { OptionsButtonType } from './types';


const OptionsButton:React.FC<OptionsButtonType> = ({
    testID,onPress,textString,isCorrect,backgroundColor,
    disabled
}) =>
{
 return (
    <TouchableOpacity 
    testID={testID}
    onPress={onPress}
    disabled={disabled}
    style={[styles.button, 
      {backgroundColor:backgroundColor}
    ]}>
       <Text>{textString}</Text>
    </TouchableOpacity>
 )

}


const styles:StyleProp<any> = StyleSheet.create({
    button: {
        flexDirection:'column',
        padding:20,
     shadowColor:"rgba(6, 8, 13, 0.3)",
     shadowOffset: {
         width: 0,
         height: 10,
     },
     shadowOpacity: 1,
    shadowRadius: 6.27,
     elevation: 150,
     borderRadius:20,
     margin:10
    },
  });
  

export default OptionsButton;