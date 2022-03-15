import { serverTimestamp } from './firebase';
import {AddItemArray} from './types';

 export const dataCreate:Array<AddItemArray> = [
    {
      languageSelected:"ENGLISH",
      header:"The house is small",
      headerSelectedString:"house",
      options:[
       {option:"Hause",isCorrect:true},
        {option:"Folgen",isCorrect:false},
        {option:"Berieden",isCorrect:false},
        {option:"Schaf",isCorrect:false}
      ],
      Question:"Das ist ___  klien",
      createdAt:serverTimestamp(),
      updatedAt:serverTimestamp()
    },

    {
      languageSelected:"ENGLISH",
      header:"The house is big",
      headerSelectedString:"big",
      options:[
       {option:"Hause",isCorrect:false},
        {option:"Folgen",isCorrect:true},
        {option:"Berieden",isCorrect:false},
        {option:"Schaf",isCorrect:false}
      ],
      Question:"Das ist klien  ___",
      createdAt:serverTimestamp(),
      updatedAt:serverTimestamp()
    },
    {
      languageSelected:"ENGLISH",
      header:"The house is small",
      headerSelectedString:"house",
      options:[
       {option:"Hause",isCorrect:true},
        {option:"Folgen",isCorrect:false},
        {option:"Berieden",isCorrect:false},
        {option:"Schaf",isCorrect:false}
      ],
      Question:"Das ___ ist klien",
      createdAt:serverTimestamp(),
      updatedAt:serverTimestamp()
    },
    {
     languageSelected:"ENGLISH",
     header:"The house is big",
     headerSelectedString:"big",
     options:[
      {option:"Hause",isCorrect:false},
       {option:"Folgen",isCorrect:true},
       {option:"Berieden",isCorrect:false},
       {option:"Schaf",isCorrect:false}
     ],
     Question:"Das  ist___ klien",
     createdAt:serverTimestamp(),
     updatedAt:serverTimestamp()
   }

  ]
 