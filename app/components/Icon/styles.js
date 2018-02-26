import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    containerInBorder: {
        borderColor: '$firmColor2',
        borderWidth: 4,
        borderRadius: 15,
        paddingVertical: 1,
        paddingHorizontal: 5,
        height: 27
    },
    textInBorder: {
        color: '$firmColor2',
        fontSize: 40,
        fontWeight: '600',
        letterSpacing: -2,
        fontFamily: '$commonFontFamily',
        lineHeight: 40
    }
});
