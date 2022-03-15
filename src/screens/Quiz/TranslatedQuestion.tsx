import React,{useMemo} from 'react';
import { View,Text } from 'react-native';
import styles from './styles';
import { TranslatedQuestionTypes } from './types';



const TranslatedQuestion:React.FC<TranslatedQuestionTypes> = ({
    currentData
}) =>
{
   return (
    <View style={styles.initTextParentView}>
    <Text style={styles.parentTextQuestionInit}>
    {
       currentData?.header?.split(' ')?.map((item:any,index:number)=>(
         item == currentData?.headerSelectedString? <Text key={index} style={styles.highlightedTextStyle}>{item}</Text>
         : <Text key={index}> {item} </Text> 
       ))
     }
   
    </Text>
    
</View>
   );
}



export default TranslatedQuestion;