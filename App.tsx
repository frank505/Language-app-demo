/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import  React, { useEffect } from 'react';
 import {
   SafeAreaView,
   StatusBar,
   Text,
   View
 } from 'react-native';
 import { NativeBaseProvider } from 'native-base';
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import Feather from 'react-native-vector-icons/Feather';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigation from './src/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import {db,addDoc,collection, serverTimestamp} from './src/config/firebase';
import { dataCreate } from './src/config/appCreateData';
import { AddItemArray } from './src/config/types';


LogBox.ignoreAllLogs()

 
 
 AntDesign.loadFont().then();
 Ionicons.loadFont().then();
 Feather.loadFont().then();
 MaterialCommunityIcons.loadFont().then();
 
 



 
 
 
 const App:React.FC = () => 
 {
   


 const createLanguages = async():Promise<void> =>
 {
  await addDoc(collection(db,'languages'),{
    language:'ENGLISH',
    createdAt:serverTimestamp(),
  updatedAt:serverTimestamp(),
   })


   await addDoc(collection(db,'languages'),{
     language:'GERMAN',
     createdAt:serverTimestamp(),
     updatedAt:serverTimestamp(),
    })
 } 

 


  const createQuestions = async():Promise<void> =>
  { 

  dataCreate.map(async(item:AddItemArray,index:number)=>{
    await addDoc(collection(db, "questions"),
     
       {
       languageSelected:item.languageSelected,
       header:item.header,
       headerSelectedString:item.headerSelectedString,
       options:[
        {option:item.options[0].option ,isCorrect:item.options[0].isCorrect},
         {option:item.options[1].option,isCorrect:item.options[1].isCorrect},
         {option:item.options[2].option,isCorrect:item.options[2].isCorrect},
         {option:item.options[3].option,isCorrect:item.options[3].isCorrect},
       ],
       Question:item.Question,
       createdAt:item.createdAt,
       updateAt:item.updatedAt
     },    
   );
  })  
 
  }


  
  useEffect(()=>{
  //  createLanguages();
  //  createQuestions();
  },[])

   
   return (
    <SafeAreaProvider>
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
    <StatusBar  />
  </SafeAreaProvider>     
   );
 };
 
 
 
 export default App;
 