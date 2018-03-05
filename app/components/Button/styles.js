import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '$firmColor1',
        borderRadius: '$inputBorderRadius',
        height: 59,
        justifyContent: 'center',
        maxHeight: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        color: '$colorOnDark',
        fontFamily: '$commonFontFamily',
        fontSize: 16,
        lineHeight: 19,
    },
});