import React,{useMemo} from 'react';
import { View,Text } from 'react-native';
import styles from './styles';
import { TranslatedQuestionTypes } from './types';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


const TranslatedQuestion:React.FC<TranslatedQuestionTypes> = ({
    currentData
}) =>
{
   return (
    <View style={styles.initTextParentView}>

     {
          currentData == 'loading' && currentData !=null && currentData!= void 0?
     
         <View style={{width:'100%'}}> 
         <SkeletonPlaceholder>
          
           <SkeletonPlaceholder.Item  width={'100%'}   height={20}  /> 
       
        </SkeletonPlaceholder>    
        </View>
        :
        <Text style={styles.parentTextQuestionInit}>
        {
           currentData?.header?.split(' ')?.map((item:any,index:number)=>(
             item == currentData?.headerSelectedString? <Text key={index} style={styles.highlightedTextStyle}>{item}</Text>
             : <Text key={index}> {item} </Text> 
           ))
         }
       
        </Text>
     }  
  
    
</View>
   );
}



export default TranslatedQuestion;