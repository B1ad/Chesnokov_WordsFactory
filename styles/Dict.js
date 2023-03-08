import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    content: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
        width: '100%',
        // height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 16
    },
    searchContainer: {
        width: '100%',
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        flexDirection: 'row'
    },
    searchBlock: {
        position: 'absolute',
        right: 16,
        marginTop: 16
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    inputSearch: {
        width: '100%',
        height: 56,
        color: '#78746D',
        fontSize: 14,
        padding: 17,
        borderColor: '#BEBAB3',
        borderRadius: 12,
        borderWidth: 1,
        // fontFamily: 'rubik-regular'
    },
    btnContainer: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    btnOrange: {
        width: '100%',
       height: 56,
        backgroundColor: '#E3562A',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#FFF',
        fontSize: 14,
        // fontFamily: 'rubik-medium'
    },
    dictWord: {
        paddingTop: 16,
        flex: 1
    },
    dictRow: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
        flexDirection: 'row',
        paddingVertical: 8,
        alignItems: 'flex-end'
    },
    listenIcon: {
        width: 25,
        height: 22,
    },
    wordTitle: {
        fontSize: 24,
        color: 'black',
        // fontFamily: 'rubik-medium',
        lineHeight: 24
    },
    wordTrans: {
        fontSize: 14,
        color: '#E3562A',
        // fontFamily: 'rubik-regular',
        lineHeight: 21,
        paddingHorizontal: 16
    },
    wordPreTitle: {
        fontSize: 20,
        color: 'black',
        // fontFamily: 'rubik-medium',
        paddingRight: 16
    },
    wordText: {
        fontSize: 14,
        color: 'black',
        // fontFamily: 'rubik-regular',
    },
    wordTextFirst: {
        fontSize: 14,
        color: 'black',
        // fontFamily: 'rubik-regular',
        paddingBottom: 8
    },
    meanBlock: {
        flex: 1,
    },
    meanBlockPart: {
        borderWidth: 1,
        borderColor: '#BEBAB3',
        borderRadius: 16,
        padding: 16,
        fontSize: 14,
        marginVertical: 5,
    },
    'meanBlockPart:first-child': {
        paddingTop: 8
    },
    exampleTextBlue: {
        color: '#65AAEA',
        // display: 'inline',
        // fontFamily: 'rubik-regular'
    },
})
