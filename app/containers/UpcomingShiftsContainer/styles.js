import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$bgPrimary',
        flexDirection: 'row',
    },
    headContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        flex: 2,
        padding: 15,
        alignItems: 'center'
    },
    shiftItem: {
        marginBottom: 10,
    },
});
