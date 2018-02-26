import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    $inputHeight: 50,
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: '$inputBorderWidth',
        borderColor: '$inputBorderColor',
        borderRadius: '$inputBorderRadius',
        height: '$inputHeight'
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        color: '$inputText',
        fontSize: '$inputFontSize',
    },
    button: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        flex: 0,
        marginRight: -2
    }
});