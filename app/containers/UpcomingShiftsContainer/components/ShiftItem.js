import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { theme } from '../../../config/theme';

import { UserPic } from '../../../components/UserPic';
import { CalendarEvent } from '../../../components/CalendarEvent';

const styles = EStyleSheet.create({
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
        flexWrap: 'wrap'
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

const ShiftItem = () => (
    <View style={styles.container}>
        <View style={styles.userPicWrap}>
            <UserPic />
        </View>
        <View style={styles.infoWrap}>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    Children's Hope
                </Text>
            </View>
            <View style={styles.detailInfoWrap}>
                <View style={styles.volunteerCounter}>
                    <Text style={styles.volunteerCounterText}>
                        189 volunteers
                    </Text>
                </View>
                <View style={styles.placeWrap}>
                    <Icon
                        style={styles.placeIcon}
                        name="map-marker"
                        size={16}
                        color={theme.$color}
                    />
                    <Text style={styles.placeText}>
                        Ukraine, Kyiv, Taras Shevchenko Park
                    </Text>
                </View>
            </View>
        </View>
        <View style={styles.calendarWrap}>
            <CalendarEvent/>
        </View>
    </View>
);

ShiftItem.propTypes = {

};

export default ShiftItem;