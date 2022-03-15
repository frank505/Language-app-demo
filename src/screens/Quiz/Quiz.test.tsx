import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, RenderAPI, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { dataCreate } from '../../config/appCreateData';
import { getDocs ,query} from '../../config/firebase';
import Quiz from './Quiz';




const mockData = dataCreate;


jest.mock("firebase/firestore", () => 
 { 
     return {
        getDocs: jest.fn().mockResolvedValue( 
            Promise.resolve( 
                {
            docs:   [
                {
                    data:()=>  mockData[0]
         }
            ],
            empty: false
        }
        ) 
        ),
        query:jest.fn(),
        orderBy:jest.fn(),
        startAfter:jest.fn(),
        limit:jest.fn(),
        getFirestore:jest.fn(),
        serverTimestamp:jest.fn(),
        collection:jest.fn(),
     }
   
  }
  );






  const renderComponent = ():RenderAPI =>
  {
    return render
    (   
            // <NavigationContainer>
              <Quiz/>
            // </NavigationContainer>     
    );
  
  }


describe('Quiz Component', () => 
{
     it('makes api call', async()=>{

             renderComponent();
            expect(getDocs).toHaveBeenCalled() ;
      });  

      it('selected an option', async()=>
      {  
          const {findByTestId,getByTestId,queryByTestId} =  renderComponent(); 
          //select  an option 
          fireEvent.press(await findByTestId('question-button-0'));
          //check if the option selected is now hidden
          expect(queryByTestId('question-button-0')).toBeNull();
          expect(await findByTestId('question-missing-button-0')).not.toBeNull();
          //check if option is present to be deselected on click
          expect(queryByTestId('selected-option')).not.toBeNull();
      });

      it('deselected an option' , async()=>
      {
        const {findByTestId,getByTestId,queryByTestId} =  renderComponent(); 
        //select an option first
        fireEvent.press(await findByTestId('question-button-0'));
        //deselect option 
        fireEvent.press(await findByTestId('selected-option'));
        //check to see if it has been deselected
        expect(queryByTestId('selected-option')).toBeNull();
        expect(queryByTestId('question-button-0')).not.toBeNull();

      });


      it('test to see if button is submitted and answer is corrected', async() =>
      {
        const {findByTestId,getByTestId,queryByTestId} =  renderComponent(); 
        //select an option which is correct
        fireEvent.press(await findByTestId('question-button-0'));
        //submit content
        fireEvent.press(await findByTestId('submit-content'));
        expect(queryByTestId('continue-content-success')).not.toBeNull();

      })

      it('test to see if button is submitted and answer is wrong', async() =>
      {
        const {findByTestId,getByTestId,queryByTestId} =  renderComponent(); 
        //select an option which is correct
        fireEvent.press(await findByTestId('question-button-1'));
        //submit content
        fireEvent.press(await findByTestId('submit-content'));
        expect(queryByTestId('continue-content-error')).not.toBeNull();
      });

      it('goes to the next question', async()=>
      {
        const {findByTestId,getByTestId,queryByTestId} =  renderComponent();
        //option selected 
        fireEvent.press(await findByTestId('question-button-0'));
        //submit button is pressed
        fireEvent.press(await findByTestId('submit-content'));
        //correct answer is selected so we move to next question
        fireEvent.press(await findByTestId('continue-content-success'));
        //expect getDocs function to be called
        expect(getDocs).toHaveBeenCalled();

        

      });


      it('if next question is null or undefined', async() =>
      {
          jest.spyOn(Alert,'alert');
        //   mockIsEmpty = true;
        const {findByTestId,getByTestId,queryByTestId} =  renderComponent();
        //option selected 
        fireEvent.press(await findByTestId('question-button-0'));
        //submit button is pressed
        fireEvent.press(await findByTestId('submit-content'));
        //correct answer is selected so we move to next question
        let func:any = {};
        let resData:any =  (await getDocs(query(func)));
         resData.empty = true;
        fireEvent.press(await findByTestId('continue-content-success')) ;
        expect(getDocs).toHaveBeenCalled();
        await  waitFor(()=>{ expect(Alert.alert).toHaveBeenCalled() }); 
      })
        

});