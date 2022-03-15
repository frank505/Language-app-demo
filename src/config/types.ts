import { FieldValue } from "./firebase"

export type ItemOptions = {
    option:string,
    isCorrect:Boolean
  }
  
   export type AddItemArray = {
    languageSelected:string,
    header:string,
    headerSelectedString:string,
    options:Array<ItemOptions>,
    Question:String,
    createdAt:  FieldValue,
    updatedAt:FieldValue
  }
 
