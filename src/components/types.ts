export type OptionsButtonType = 
{
testID:string,
onPress?:(optionalParams?:any) => void,
textString:string,
isCorrect:Boolean,
backgroundColor:string,
disabled?:boolean
}

export type SubmitButtonType = {
    backgroundColor?:string,
    width?:string,
    height?:number,
    textColor?:string,
    onPress?:(optionalParams?:any) => void,
    disabled?:boolean,
    textString:string,
    testID:string
}