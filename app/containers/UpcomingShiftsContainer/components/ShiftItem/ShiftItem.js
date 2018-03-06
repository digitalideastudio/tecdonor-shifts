import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { theme } from '../../../../config/theme';

import { BackgroundImage } from '../../../../components/BackgroundImage';
import { CalendarEvent } from '../../../../components/CalendarEvent';

import styles from './styles';

const ShiftItem = ({
                       style,
                       title,
                       location,
                       start,
                       volunteersCount,
                       imageUrl,
                       onPress,
                   }) => {
    const getPlace = () => {
        let locationObj = location;
        if (typeof location === 'string') {
            locationObj = JSON.parse(location);
        }
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
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
        >
            <View style={styles.titleWrap}>
                <BackgroundImage
                    url={imageUrl}
                    blurStyle={styles.titleBlurBg}
                />
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.mainWrap}>
                <View style={styles.infoWrap}>
                    <View style={styles.detailInfoWrap}>
                        <View style={styles.volunteerCounter}>
                            <Text style={styles.volunteerCounterText}>
                                {volunteersCount} volunteers
                            </Text>
                        </View>
                        { getPlace() }
                    </View>
                </View>
                <View >
                    <CalendarEvent
                        date={start}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
};

ShiftItem.propTypes = {
    style: PropTypes.any,
    title: PropTypes.string,
    start: PropTypes.string,
    volunteersCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageUrl: PropTypes.string,
    onPress: PropTypes.func,
};

export default ShiftItem;