export const validateObject = (dataObject:any):boolean =>
   {
    for(var objects in dataObject)
    {
      // console.log('this is the dataObject oooo ss'+dataObject[objects]+' sss');
      /**
       * if  an empty field exist then disable submit button
       */
     if(dataObject[objects]!="" )
     {
        return true;
     }
    }
   /**
    * all forms fields have been submited then we return false and set disable property to true
    */
     return false;
   }



  








 












 


