import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        borderWidth: '$blockBorderWidth',
        borderRadius: '$blockBorderRadius',
        borderColor: '$blockBorderColor',
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '$bgPrimaryLight',
        maxWidth: 600
    },
    userPicWrap: {
        marginRight: 15,
        justifyContent: 'center'
    },
    infoWrap: {
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        paddingBottom: 5
    },
    titleText: {
        color: '$color',
        fontSize: '$pFontSize',
        lineHeight: '$pLineHeight',
        fontFamily: '$commonFontFamily'
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