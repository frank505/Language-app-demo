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
    shouldDisableAllOptions
  }
    ) =>
{
    return (
        <View style={styles.selectedButtonsParentView}>
        {
            currentData?.options?.map((item:ItemOptions,index:number)=>(
                hasSelected==true && selectedItemString==item.option?
                <View style={styles.blindSpaceSelected} key={index}></View>
                :
                <OptionsButton
                key={index}
                testID='folgen-btn'
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