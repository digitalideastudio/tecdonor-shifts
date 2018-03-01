import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        width: 40,
    },
    dateWrap: {
        borderWidth: 1,
        borderColor: '#555',
        width: 30,
    },
    month: {
        backgroundColor: '#DB3B3A',
        padding: 1,
    },
    monthText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 8,
        lineHeight: 8,
    },
    day: {
        alignItems: 'center',
    },
    dayText: {
        fontFamily: '$commonFontFamily',
        fontSize: 14,
        lineHeight: 18,
    },
    time: {
        paddingTop: 2,
    },
    timeText: {
        fontSize: 8,
    },
});
