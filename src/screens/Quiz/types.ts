import { AddItemArray } from "../../config/types"

export type TranslatedQuestionTypes = {
    currentData:any|AddItemArray,
}

export type QuestionTypes = {
    currentData:any|AddItemArray,
    dashSection:string,
    hasSelected:boolean,
    selectedItemString:string,
    deselectItem: () => void,
    backgroundColor:string,
    shouldDisableAllOptions:boolean
}

export type OptionsTypes = {
    currentData:any|AddItemArray,
    hasSelected:boolean,
    selectedItemString:string,
    selectAnOption:(isCorrect:Boolean,option:string) => void,
    shouldDisableAllOptions:boolean
}