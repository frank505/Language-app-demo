import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from './screens/Quiz'




type NavigationProps = {
    
}

const RootStack = createStackNavigator();

const Navigation: React.FC<NavigationProps> = () => 
{
    return ( 
       

      <NavigationContainer >
          <RootStack.Navigator 
          screenOptions={{headerShown:false}}
          >
            

            <RootStack.Screen  name="Quiz" component={Quiz}  /> 
       

          
              
          </RootStack.Navigator>
          </NavigationContainer>
       
    )
}

export default Navigation
