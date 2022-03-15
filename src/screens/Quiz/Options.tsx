import React from 'react';
import { View } from 'react-native';
import OptionsButton from '../../components/OptionsButton';
import { ItemOptions } from '../../config/types';
import { colors } from '../../theme/colors';
import styles from './styles';
import { OptionsTypes } from './types';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


const Options:React.FC<OptionsTypes> = (
    {
    currentData,
    hasSelected,
    selectedItemString,
    selectAnOption,
    shouldDisableAllOptions,
    testID
  }
    ) => 
{

    return ( 
        <View>
       {
         currentData == 'loading' && currentData!=null?
         <View style={{width:'100%',marginTop:30}}>
        <SkeletonPlaceholder>
          
        <SkeletonPlaceholder.Item  flexDirection='row' width={150} height={80}>

  
<SkeletonPlaceholder.Item width={60} borderRadius={20} height={50} margin={10}/> 

<SkeletonPlaceholder.Item  width={60}  borderRadius={20} height={50}  margin={10}/>    

     </SkeletonPlaceholder.Item>


        <SkeletonPlaceholder.Item  flexDirection='row' width={150} height={80}>

  
<SkeletonPlaceholder.Item width={60} borderRadius={20} height={50} margin={10}/> 

<SkeletonPlaceholder.Item  width={60}  borderRadius={20} height={50}  margin={10}/>    

</SkeletonPlaceholder.Item>

      </SkeletonPlaceholder> 
      </View>
     :

       <View style={styles.selectedButtonsParentView} testID={testID}>
      
          {
              currentData?.options?.map((item:ItemOptions,index:number)=>(
                hasSelected==true && selectedItemString==item.option?
                <View 
                testID={`question-missing-button-${index}`} 
                style={styles.blindSpaceSelected} key={index}></View>
                :
                <OptionsButton
                key={index}
                testID={`question-button-${index}`}
                backgroundColor={shouldDisableAllOptions?'#ccc':colors.mainWhite}
                textString={item.option}
                isCorrect={item.isCorrect}
                onPress={() => selectAnOption(item.isCorrect,item.option)}
                disabled={shouldDisableAllOptions}
                />
                
            ))
          }

          
       </View>
         }

        </View>
       
    )
}

export default Options;