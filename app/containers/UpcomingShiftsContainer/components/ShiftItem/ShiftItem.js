import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { theme } from '../../../../config/theme';

import { BackgroundImage } from '../../../../components/BackgroundImage';
import { CalendarEvent } from '../../../../components/CalendarEvent';

import styles from './styles';

const ShiftItem = ({ style, shiftTitle, location, start, volunteers, imageUrl }) => {

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
            <View style={styles.titleWrap}>
                <BackgroundImage
                    source={{ uri: imageUrl }}
                    blurStyle={styles.titleBlurBg}
                />
                <Text style={styles.titleText}>{shiftTitle}</Text>
            </View>
            <View style={styles.mainWrap}>
                <View style={styles.infoWrap}>
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
        </View>
    )
};

ShiftItem.propTypes = {
    style: PropTypes.any,
    shiftTitle: PropTypes.string,
    start: PropTypes.string,
    volunteers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageUrl: PropTypes.string,
};

export default ShiftItem;