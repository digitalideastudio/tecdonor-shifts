import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { theme } from '../../../../config/theme';

import { UserPic } from '../../../../components/UserPic';
import { CalendarEvent } from '../../../../components/CalendarEvent';

import styles from './styles';

const ShiftItem = ({ style, shiftTitle, location, start, volunteers }) => {

    const getPlace = () => {
        const locationObj = JSON.parse(location);
        if (locationObj !== null && typeof locationObj === 'object' && locationObj.name) {
            return (
                <View style={styles.placeWrap}>
                    <Icon
                        style={styles.placeIcon}
                        name="map-marker"
                        size={16}
                        color={theme.$color}
                    />
                    <Text style={styles.placeText}>
                        {locationObj.name}
                    </Text>
                </View>)
        }
        return null;
    };

    return (
        <View style={[styles.container, style]}>
            <View style={styles.userPicWrap}>
                <UserPic />
            </View>
            <View style={styles.infoWrap}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        {shiftTitle}
                    </Text>
                </View>
                <View style={styles.detailInfoWrap}>
                    <View style={styles.volunteerCounter}>
                        <Text style={styles.volunteerCounterText}>
                            {volunteers} volunteers
                        </Text>
                    </View>
                    { getPlace() }
                </View>
            </View>
            <View style={styles.calendarWrap}>
                <CalendarEvent
                    date={start}
                />
            </View>
        </View>
    )
};

ShiftItem.propTypes = {
    style: PropTypes.any,
    shiftTitle: PropTypes.string,
    start: PropTypes.string,
    volunteers: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ShiftItem;