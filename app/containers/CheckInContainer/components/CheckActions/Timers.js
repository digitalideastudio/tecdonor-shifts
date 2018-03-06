import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import { TIME_FORMAT } from '../../../../config/settings';

import styles from './styles';

class Timers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: moment().format(TIME_FORMAT),
            pastTime: ''
        }
    }

    componentDidMount() {
        this._intervalId = setInterval(this._timeHandler, 1000);
    }

    componentWillUnmount() {
        clearInterval(this._intervalId);
    }

    _timeHandler = () => {
        this._setCurrentTime();
        this._setPastTime();
    };

    _setCurrentTime = () => {
        this.setState({ currentTime: moment().format(TIME_FORMAT)});
    };

    _getFormattedDuration = (duration) => {
        const h = duration.hours();
        const m = duration.minutes();
        const s = duration.seconds();
        return `${h} h ${('0' + m).slice(-2)} min ${('0' + s).slice(-2)} sec`;
    };

    _setPastTime = (props = this.props) => {
        const { checkInTime, checkedTimeAmount } = props;
        if (!checkedTimeAmount) return;
        let pastTime = checkedTimeAmount;
        if (checkInTime) {
            const pastTimeDuration = moment.duration(moment.utc().diff(moment.utc(checkInTime)));
            pastTime = pastTimeDuration.add(pastTime);
        }
        const timeString = this._getFormattedDuration(pastTime);
        this.setState({ pastTime : timeString });
    };



    render() {
        return (
            <View style={styles.timers}>
                <View style={styles.timerContainer}>
                    <View style={styles.timerTitleContainer}>
                        <Text style={styles.timerTitleText}>Current time:</Text>
                    </View>
                    <View style={styles.timerValueContainer}>
                        <Text style={styles.timerValueText}>
                            {this.state.currentTime}
                        </Text>
                    </View>
                </View>
                <View style={styles.timerContainer}>
                    <View style={styles.timerTitleContainer}>
                        <Text style={styles.timerTitleText}>Volunteered time:</Text>
                    </View>
                    <View style={styles.timerValueContainer}>
                        <Text style={styles.timerValueText}>
                            {this.state.pastTime}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

Timers.propTypes = {
    checkInTime: PropTypes.string,
    checkedTimeAmount: PropTypes.any
};

export default Timers;