import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, RenderAPI, waitFor } from '@testing-library/react-native';
import Navigation from './Navigation';














  const renderComponent = ():RenderAPI =>
  {
    return render
    (   
              <Navigation/>
    );
  
  }


  describe('Quiz Component', () => 
{
     it('makes api call', async()=>{

             renderComponent();
      });  

    });     