import { StyleSheet } from "react-native";
import {
    style,
    dimens,
    fonts,
    colors
} from './configs'

export default StyleSheet.create({
    TexInput: {
        fontSize:dimens.SIZE_SM,
        fontWeight:'600',
        color: colors.WHITE,
        backgroundColor:colors.BLUE,
        borderRadius: 5,
        paddingLeft: dimens.SIZE_XS,
        paddingVertical: dimens.SIZE_MD,
        marginHorizontal: dimens.SIZE_XS,
        marginTop: dimens.SIZE_XL
    },

})