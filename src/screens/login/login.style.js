import { ImageBackground } from "react-native"
import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        padding: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        width: "100%",
        marginBottom: 20
    },
    formGroup: {
        width: "100%",
        marginTop: 1,
        marginBottom: 40
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        marginBottom: 40
    },
    footerText: {
        textAlign: "center",
        marginBottom:20,
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    },
    footersenhaText: {
        width: "100%",
        marginBottom:0.1,
        textDecorationLine: 'underline',
        textAlign: 'left',
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    }
}