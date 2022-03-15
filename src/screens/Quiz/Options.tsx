import React from 'react';
import { View } from 'react-native';
import OptionsButton from '../../components/OptionsButton';
import { ItemOptions } from '../../config/types';
import { colors } from '../../theme/colors';
import styles from './styles';
import { OptionsTypes } from './types';


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
        <View style={styles.selectedButtonsParentView} testID={testID}>
        {
          currentData!== null &&  currentData.options.map((item:ItemOptions,index:number)=>(
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
    )
}

export default Options;