import { StyleSheet } from "react-native";
import {
    style,
    dimens,
    fonts,
    colors
} from './configs'

export default StyleSheet.create({
    botao:{
        backgroundColor: colors.BLUE,
        marginVertical: dimens.SIZE_XL,
        marginHorizontal: dimens.SIZE_XL,
        paddingVertical:dimens.SIZE_SM,
        borderRadius: 25 
    },
    TxtBotao:{
        color: colors.WHITE,
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center',
    }

})