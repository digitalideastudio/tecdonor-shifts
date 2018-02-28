import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '$bgPrimary',
        justifyContent: 'space-between',
        margin: 10,
        padding: 30,
        minHeight: 200
    },
    titleText: {
        fontFamily: '$commonFontFamily',
        fontSize: 32,
        color: '$firmColor2',
        fontWeight: 'bold'
    },
    mainText: {
        color: '$firmColor1',
        fontFamily: '$commonFontFamily',
        fontSize: 24,
        textAlign: 'center'
    }
});
