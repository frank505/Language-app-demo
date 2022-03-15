import React,{useEffect, useState} from 'react';
import {Alert, Text,View} from 'react-native';
import { colors } from '../../theme/colors';
import SubmitButton from '../../components/SubmitButton';
import styles from './styles';
import { query,collection, db, orderBy, getDocs,limit, QuerySnapshot, startAfter} from '../../config/firebase';

import { AddItemArray, ItemOptions } from '../../config/types';
import TranslatedQuestion from './TranslatedQuestion';
import Question from './Question';
import Options from './Options';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DocumentData} from 'firebase/firestore';


//#2596be

const Quiz:React.FC<{}> = () =>
{
   
   
    const [currentData,setCurrentData] = useState<any|AddItemArray>(null);
    const [lastVisible,setLastVisible] = useState<any>(0);
    const [limitNumber,setLimit] = useState<number>(1); 
    const [hasSelected,setHasSelected] = useState<boolean>(false);
    const [selectedItemString,setSelectedItemString] = useState<string>('');
    const [selectedItemCorrectProps,setSelectedItemCorrectProps] = useState<Boolean>(false);
    const [disableButton,setButtonIsDisabled] = useState<boolean>(true);
    const [selectedButtonColor,setSelectedButtonColor] = useState<string>(colors.mainWhite);
    const [submitButtonToShow,setSubmitButtonToShow] = useState<string>('default');
    const [shouldDisableAllOptions,setShouldDisableAllOptions] = useState<boolean>(false);
    const [correctAnswer,setCorrectAnswer] = useState<string>('');
    const dashSection:string = "___";
   

    const getFirstData = async():Promise<void> =>
    {
    const docsQuery = await getDocs( query(collection(db,'questions'), orderBy('createdAt'),  limit(limitNumber)) ); 
    setData(docsQuery); 
    };


    const setData = (docsQuery:QuerySnapshot<DocumentData>):void =>
    {
      const contentLastVisible = docsQuery.docs[docsQuery.docs.length-1];
    setLastVisible(contentLastVisible);
      setCurrentData(docsQuery.docs[0].data());
    setQuestionCorrectAnswer(docsQuery.docs[0].data());
    }

    const getNextData = async():Promise<void> =>
    {
   
        console.log(collection(db,'questions'));
        const docsQuery = await getDocs( query(collection(db,'questions'),
         orderBy('createdAt'), startAfter(lastVisible),limit(limitNumber) ));
         if(docsQuery.empty) 
         {
          return Alert.alert('Oops! Last Question', 'You have Successfully answered All Questions');
         }
         resetQuestionsSelected(); 
        setData(docsQuery); 
     

    
       

    

    
   
    }

   
    const setQuestionCorrectAnswer = (data:any|AddItemArray) =>
    {
      data.options.map((item:ItemOptions,index:number)=>{
          if(item.isCorrect)  setCorrectAnswer(item.option);   
      });

    }


    const resetQuestionsSelected = ():void =>
    {
        setShouldDisableAllOptions(false);
        setHasSelected(false);
        setSelectedItemString('');
        setSelectedItemCorrectProps(false);
        setButtonIsDisabled(true);
        setSelectedButtonColor('white');
        setSubmitButtonToShow('default');
       
    }
     

   useEffect(() => {
  
    getFirstData();
   
     return () => {
 
     }
   }, []);



   useEffect(()=>{
   console.log(currentData);
   },
   [currentData]);


 const selectAnOption = (isCorrect:Boolean,option:string):void =>
 {
     setHasSelected(true);
     setSelectedItemString(option);
     setSelectedItemCorrectProps(isCorrect);
     setButtonIsDisabled(false);
     setSelectedButtonColor('white');

 }

 const deselectItem = () =>
 {
     setHasSelected(false);
     setSelectedItemString('');
     setSelectedItemCorrectProps(false);
     setButtonIsDisabled(true);
 }

 const onSubmitButton = () =>
 {
     setShouldDisableAllOptions(true);

     if(selectedItemCorrectProps)
     {
        setSelectedButtonColor(colors.successColor);
        setSubmitButtonToShow('success');
     }else
     {
        setSelectedButtonColor(colors.failedColor);
        setSubmitButtonToShow('error');
     }
  
     
 }


 const goToNextQuestion = async():Promise<void> =>
 {
    await getNextData();
 }


   
    
   return (
       <View style={{backgroundColor:colors.baseColor,flex:1}}>

       <View style={styles.contentContainerStyle}>


            <View style={{justifyContent:'center',alignItems:'center'}}>


          {/**instruction section */}
       <View style={{marginTop:15,marginBottom:15}}>
       <Text style={{color:colors.mainWhite}}>Fill in the missing word</Text>
       </View>
     {/**question section */}

      <TranslatedQuestion currentData={currentData} />
      
      {/**enter you answer here */}

      <Question 
      currentData={currentData} 
      dashSection={dashSection} 
      hasSelected={hasSelected} 
      selectedItemString={selectedItemString} 
      deselectItem={()=>deselectItem()} 
      backgroundColor={selectedButtonColor} 
      shouldDisableAllOptions={shouldDisableAllOptions}    
      />


    {/**selected buttons */}
       
       <Options 
       currentData={currentData} 
       hasSelected={hasSelected} 
       selectedItemString={selectedItemString} 
       selectAnOption={selectAnOption}     
       shouldDisableAllOptions={shouldDisableAllOptions} 
        testID="options-parent"
       />

            </View>
     
           
            <View style={{width:'100%'}}>
               {
                  submitButtonToShow==='default' &&
                   <SubmitButton 
                   backgroundColor={ 
                       disableButton?
                       colors.submitButtonGreen
                       :
                       colors.submitButtonEnabled
                    }
                    textString={
                        disableButton?
                        'CONTINUE'
                           :
                        'CHECK ANSWER'   
                    }
                   width='100%'
                   height={50}
                   textColor='white'
                   onPress={onSubmitButton}
                   disabled={disableButton}
                   testID='submit-content'
                 />
                
               }
           

             </View>



    
  </View>
   {/** modal button for failed and successful response */}
     {
          submitButtonToShow=='success'?
          <View 
         style={styles.submitButtonParentViewSuccess}>
            <View style={styles.seperateTextAndFlagView}>
                <Text style={styles.answerText}>{`Answer `}
                <Text style={styles.answerValue}>{`:${correctAnswer}`}</Text>
                </Text>
                
                <Ionicons 
                name='flag'
                size={24}
                color={colors.mainWhite}
                />
            </View>

           <SubmitButton 
           testID='continue-content-success'
         backgroundColor={colors.mainWhite}
          textString={'CONTINUE'}
         width='90%'
         height={50}
         textColor={colors.successColor}
         onPress={goToNextQuestion}
         disabled={disableButton}
       />
         </View>
         :
         submitButtonToShow=='error'?
         <View 
         style={styles.submitButtonParentViewError}>
            <View style={styles.seperateTextAndFlagView}>
                <Text style={styles.answerText}>{`Answer `}
                <Text style={styles.answerValue}>{`:${correctAnswer}`}</Text>
                </Text>
                
                <Ionicons 
                name='flag'
                size={24}
                color={colors.mainWhite}
                />
            </View>

           <SubmitButton 
           testID='continue-content-error'
         backgroundColor={colors.mainWhite}
          textString={'CONTINUE'}
         width='90%'
         height={50}
         textColor={colors.failedColor}
         onPress={goToNextQuestion}
         disabled={disableButton}
       />
         </View>
         :
         null
     }
    


       </View>
  
   );
}


export default Quiz;