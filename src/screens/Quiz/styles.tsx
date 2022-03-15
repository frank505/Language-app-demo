import { StyleProp,StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';



const styles:StyleProp<any> = StyleSheet.create({
blankSpaceLine:{
    borderBottomColor:'white',borderBottomWidth: 1,width:'30%',marginLeft:5,marginRight:5
},
questionTextDefaultStyle:{
    fontWeight:'bold',color:'white'
},
questionTextDefaultStyleParentView:{
    marginLeft:2,marginRight:2
},
selectedButtonsParentView:{
    marginTop:'20%',flexDirection:'row',width:'80%',display:'flex',flexWrap:'wrap',marginLeft:'10%'
},
contentContainerStyle:{
    backgroundColor:colors.baseGreen,flex:1,
        marginTop:'40%',borderTopLeftRadius:30,borderTopRightRadius:30,
        paddingLeft:'10%',paddingRight:'10%',paddingTop:'15%',
        paddingBottom:'15%',alignItems:'center',justifyContent:'space-between'
},
initTextParentView:{
    display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-evenly'
},
parentTextQuestionInit:{
    color:'white',fontSize:23
},
highlightedTextStyle:{
    fontWeight:'bold',textDecorationLine:'underline'
},
blindSpaceSelected:{
    backgroundColor:colors.submitButtonGreen,
                    borderRadius:20,height:60,width:80,
                    margin:10
},
submitButtonParentViewSuccess:{
    backgroundColor:colors.successColor,
    position:'absolute',
    width:'100%',
    height:150,
    zIndex:100,
    left:0,
    right:0,
    bottom:0,
    display:'flex',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    alignItems:'center'
},
submitButtonParentViewError:{
    backgroundColor:colors.failedColor,
    position:'absolute',
    width:'100%',
    height:150,
    zIndex:100,
    left:0,
    right:0,
    bottom:0,
    display:'flex',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    alignItems:'center'
},
seperateTextAndFlagView:{
    justifyContent:'space-between',
            display:'flex',flexDirection:'row',width:'80%',marginTop:10,marginBottom:10
},
answerText:{color:colors.mainWhite,fontWeight:'bold'},
answerValue:{color:colors.mainWhite}
})


export default styles;