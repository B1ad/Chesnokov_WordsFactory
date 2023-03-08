import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imageContainer: {},
    image: {
        height: 264,
        width: 375
    },
    textContainer: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 17,
        paddingHorizontal: 16
    },
    title: {
        color: '#3C3A36',
        fontSize: 24,
        margin: 8,
        lineHeight: 32,
        // fontFamily: 'rubik-medium'
    },
    text: {
        lineHeight: 21,
        paddingTop: 8,
        color: '#78746D',
        fontSize: 14,
        // fontFamily: 'rubik-regular',
    },
    btnContainer: {
        width: '100%',
        paddingHorizontal: 32,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: '100%',
        height: 56,
        // marginVertical: 16,
        backgroundColor: '#E3562A',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#FFF',
        fontSize: 16,
        // fontFamily: 'rubik-medium'
    },
    dotsContainer: {
        paddingBottom: 72,
        paddingTop: 16,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dots: {
        blue: {
            width: 16,
            height: 6,
            backgroundColor: '#65AAEA',
            borderRadius: 4,
            margin: 6
        },
        gray: {
            width: 6,
            height: 6,
            backgroundColor: '#D5D4D4',
            margin: 6
        }
    },
    skipBtn: {
        fontSize: 14,
        color: '#78746D',
        position: 'absolute',
        right: 26,
        top: 76,
        // fontFamily: 'rubik-medium'
    }
})