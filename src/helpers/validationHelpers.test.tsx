import { validateObject } from "./validationHelpers";








describe('Name of the group', () => {

    it('expect validateObj to be false', ()=>
    {
        let data =
          {
            name:"",
            email:""
        }

      let validateRes = validateObject(data);
      console.log(validateRes);
      expect(validateRes).toBe(false);
    });

    it('expect validateObj to be true', ()=>
    {
    let  data ={
        name:'henry',
        email:'d'
      }

      let validate = validateObject(data);
      console.log(validate);
      expect(validate).toBe(true);
    })

  

});
