import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15
    },
    timers: {
        paddingVertical: 15
    },
    timerContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    timerTitleContainer: {
        flex: 4,
        alignItems: 'flex-end',
        paddingRight: 10
    },
    timerValueContainer: {
        flex: 5
    },
    timerTitleText: {
        fontFamily: '$commonFontFamily',
        fontSize: 16,
    },
    timerValueText: {
        fontSize: 16,
        fontFamily: '$commonFontFamily',
        color: '$firmColor2',
    },
    buttonContainer: {
        alignItems: 'center'
    }
});
