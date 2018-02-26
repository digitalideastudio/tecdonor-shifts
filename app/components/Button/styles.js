import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '$firmColor1',
        borderRadius: '$inputBorderRadius',
        padding: 15,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        fontFamily: '$commonFontFamily',
        color: '$colorOnDark',
        fontSize: 16,
        lineHeight: 19,
    },
});