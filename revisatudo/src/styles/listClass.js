import { StyleSheet } from "react-native";
import {
    style,
    dimens,
    fonts,
    colors
} from './configs'

export default StyleSheet.create({
  
    titleClass:{
        color: colors.YELLOW,
        fontSize: dimens.SIZE_SM,
        fontWeight:'bold',
        marginLeft:dimens.SIZE_SM,
        marginBottom:dimens.SIZE_MD
    },
    
    itemClass:{
        alignItems: "center",
        backgroundColor: colors.BLUE,
        borderRadius:5,
        margin: 4,
        padding: 30,

        flexGrow: 1,
        flexBasis:0,
    },
    textItem:{
        color:colors.YELLOW,
    },
    itemEmpty: {
        backgroundColor: "transparent"
      },

})