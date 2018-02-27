import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '$firmColor1',
        borderRadius: '$inputBorderRadius',
        padding: 20,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: '$commonFontFamily',
        color: '$colorOnDark',
        fontSize: 16,
        lineHeight: 19,
    },
});