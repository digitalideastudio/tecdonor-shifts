import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        flex: 1,
    },
    headContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    mainContainer: {
        flex: 2,
        padding: 15,
        alignItems: 'center',
    },
    formContainer: {
        maxWidth: '$blockFormMaxWidth',
        width: '100%',
    },
    loginButton: {
        marginTop: 40,
        flex: 1
    }
});