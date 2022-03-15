import React from 'react';
import { QuestionTypes } from './types';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './styles';
import OptionsButton from '../../components/OptionsButton';
import DashedLine from 'react-native-dashed-line';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';




const Question:React.FC<QuestionTypes> = ({
    currentData,
    dashSection,
    hasSelected,
    selectedItemString,
    deselectItem,
    backgroundColor,
    shouldDisableAllOptions
}) =>
{

  return (
    <View style={{marginTop:'20%',flexDirection:'row'}}>
    {
   
    currentData == 'loading' && currentData!=null?
     
     <View style={{width:'100%'}}>
     <SkeletonPlaceholder>
      
       <SkeletonPlaceholder.Item  width={'100%'}   height={10}  /> 
   
    </SkeletonPlaceholder>    
    </View>
           
      
:
     currentData?.Question?.split(' ').map((item:any,index:number)=>(
          item==dashSection?
          hasSelected==false ? 
          <View style={styles.blankSpaceLine} key={index}></View>
          :
          <View style={{marginTop:-20}} key={index}>
          <OptionsButton
          testID='selected-option'
          textString={selectedItemString}
          isCorrect={item.isCorrect}
          onPress={() => deselectItem()}
          backgroundColor={backgroundColor}
          disabled={shouldDisableAllOptions}
          />
          </View>
          :
         <TouchableOpacity key={index} 
         style={styles.questionTextDefaultStyleParentView}
         >
          <Text style={styles.questionTextDefaultStyle}> {item} </Text>
          <DashedLine dashLength={1} dashThickness={1} dashColor="white" />
          </TouchableOpacity>
          
      ))
    
    }
 

</View>
  )
}


export default Question;