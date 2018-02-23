import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    dateWrap: {
        borderWidth: 1,
        borderColor: '#555',
        width: 30
    },
    month: {
        backgroundColor: '#DB3B3A',
        padding: 1
    },
    monthText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 8,
        lineHeight: 8
    },
    day: {
        alignItems: 'center'
    },
    dayText: {
        fontFamily: '$commonFontFamily',
        fontSize: 14,
        lineHeight: 18
    },
    time: {
        paddingTop: 2
    },
    timeText: {
        fontSize: 8
    }
});

const CalendarEvent = () => (
    <View style={styles.container}>
        <View style={styles.dateWrap}>
            <View style={styles.month}>
                <Text style={styles.monthText}>
                    FEB
                </Text>
            </View>
            <View
                style={styles.day}
            >
                <Text style={styles.dayText}>
                    20
                </Text>
            </View>
        </View>
        <View style={styles.time}>
            <Text style={styles.timeText}>
                12:00 PM
            </Text>
        </View>
    </View>
);

CalendarEvent.propTypes = {

};

export default CalendarEvent;