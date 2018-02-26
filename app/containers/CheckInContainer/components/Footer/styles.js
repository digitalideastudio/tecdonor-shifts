import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    logoContainer: {
        width: 100
    },
    linkContainer: {
        justifyContent: 'center',
    },
    linkText: {
        fontSize: 9,
        lineHeight: 11,
        color: '$barelyColor',
    }
});
