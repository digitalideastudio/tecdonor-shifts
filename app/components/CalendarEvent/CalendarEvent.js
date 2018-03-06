import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';

const CalendarEvent = ({ date }) => {
    const parsedDate = moment.utc(date).local();

    return (
        <View style={styles.container}>
            <View style={styles.dateWrap}>
                <View style={styles.month}>
                    <Text style={styles.monthText}>
                        {parsedDate.format('MMM').toUpperCase()}
                    </Text>
                </View>
                <View style={styles.day}>
                    <Text style={styles.dayText}>
                        {parsedDate.format('D')}
                    </Text>
                </View>
            </View>
            <View style={styles.time}>
                <Text style={styles.timeText}>
                    {parsedDate.format('h:mm A')}
                </Text>
            </View>
        </View>
    )
};

CalendarEvent.propTypes = {
    date: PropTypes.string,
};

export default CalendarEvent;