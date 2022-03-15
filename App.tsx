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
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import Feather from 'react-native-vector-icons/Feather';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigation from './src/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';



LogBox.ignoreAllLogs()

 
 
 AntDesign.loadFont().then();
 Ionicons.loadFont().then();
 Feather.loadFont().then();
 MaterialCommunityIcons.loadFont().then();
 
 



 
 
 
 const App:React.FC = () => 
 {
   

   
   return (
    <SafeAreaProvider>
      <Navigation />
    <StatusBar  />
  </SafeAreaProvider>     
   );
 };
 
 
 
 export default App;
 