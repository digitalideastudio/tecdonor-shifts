import EStyleSheet from 'react-native-extended-stylesheet';
import { textShadow } from '../../config/theme';

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$bgPrimary'
    },
    header: {
        flex: 2,
    },
    titles: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
        alignItems: 'center'
    },
    pageTitleText: {
        fontSize: '$h1FontSize',
        color: '$colorOnDark',
        textAlign: 'center',
        ...textShadow
    },
    pageSubTitleText: {
        fontSize: '$h3FontSize',
        color: '$colorOnDark2',
        textAlign: 'center',
        ...textShadow,
    },
    main: {
        flex: 3,
        padding: 15,
    },
    mainSpacer: {
        flex: 0.3,
    },
    inputContainer: {
        maxWidth: 400,
        alignSelf: 'center',
        width: '100%',
    }
});