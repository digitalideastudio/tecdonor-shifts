import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '$blockFormMaxWidth',
    },
    text: {
        textAlign: 'center'
    },
    button: {
        width: '100%'
    },
    refreshButtonContainer: {
        paddingVertical: 15
    },
    logoutButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    logoutButton: {
        backgroundColor: '$firmColor2',
    }
});
