import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Moment from 'moment';

import styles from './styles';

const Timers = () => (
    <View style={styles.timers}>
        <View style={styles.timerContainer}>
            <View style={styles.timerTitleContainer}>
                <Text style={styles.timerTitleText}>Current time:</Text>
            </View>
            <View style={styles.timerValueContainer}>
                <Text style={styles.timerValueText}>
                    {Moment().format('ddd MMM D h:mm:mm A')}
                </Text>
            </View>
        </View>
        <View style={styles.timerContainer}>
            <View style={styles.timerTitleContainer}>
                <Text style={styles.timerTitleText}>Voluntered time:</Text>
            </View>
            <View style={styles.timerValueContainer}>
                <Text style={styles.timerValueText}>
                    5:43
                </Text>
            </View>
        </View>
    </View>
);

Timers.propTypes = {};

export default Timers;