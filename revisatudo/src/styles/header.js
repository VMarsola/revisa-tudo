import { StyleSheet } from "react-native";
import {
    style,
    dimens,
    fonts,
    colors
} from './configs'

export default StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: dimens.SIZE_MD,
        fontWeight: 'bold',
        color: colors.WHITE ,
        backgroundColor: colors.BLUE,
        paddingTop: dimens.SIZE_MD,
        paddingBottom: dimens.SIZE_MD,
        marginBottom: dimens.SIZE_XL,
    },

})