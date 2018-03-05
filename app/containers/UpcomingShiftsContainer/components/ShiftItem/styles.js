import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        borderWidth: '$blockBorderWidth',
        borderRadius: '$blockBorderRadius',
        borderColor: '$blockBorderColor',
        flexDirection: 'column',
        backgroundColor: '$bgPrimaryLight',
        maxWidth: 400,
        width: '100%',
        overflow: 'hidden'
    },
    titleWrap: {
        flex: 1,
        padding: 3,
        alignItems: 'center',
        backgroundColor: '$firmColor1',
    },
    titleText: {
        color: '$colorOnDark',
        fontSize: '$h3FontSize',
        lineHeight: '$h3LineHeight',
        fontFamily: '$commonFontFamily',
        paddingVertical: 2,
        paddingHorizontal: 3,
    },
    titleBlurBg: {
        backgroundColor: '#0005',
    },
    mainWrap: {
        padding: 15,
        flex: 1,
        flexDirection: 'row'
    },
    userPicWrap: {
        marginRight: 15,
        justifyContent: 'center'
    },
    infoWrap: {
        justifyContent: 'space-between',
        flex: 1,
    },
    detailInfoWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        // flexDirection: 'column',
    },
    volunteerCounter: {
        minWidth: 120,
        marginTop: 3
    },
    volunteerCounterText: {
        color: '$color',
        fontFamily: '$commonFontFamily',
        fontSize: 12,
        lineHeight: 14,
        opacity: .7,
    },
    placeWrap: {
        // borderLeftColor: '#717171',
        // borderLeftWidth: 1,
        flexDirection: 'row',
        marginTop: 3,
        opacity: .6,
    },
    placeIcon: {
        marginRight: 5,
        // marginLeft: 10,
    },
    placeText: {
        fontSize: 10,
        lineHeight: 16,
        color: '$color',
        fontFamily: '$commonFontFamily'
    }
});