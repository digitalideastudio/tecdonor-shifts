import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Timers from './Timers';
import { FlatButton } from '../../../../components/Button';
import { Spinner } from '../../../../components/Spinner';

import styles from './styles';

const CheckActions = ({ onCheckIn, onCheckOut, checkInTime, checkedTimeAmount, loading }) => {
    const onPress = () => {
        if (checkInTime) {
            onCheckOut();
        } else {
            onCheckIn();
        }
    };
    const getButtonText = () => {
        return `CHECK ${checkInTime ? 'OUT' : 'IN'}`;
    };

    return (
        <View style={styles.container}>
            <Timers
                checkInTime={checkInTime}
                checkedTimeAmount={checkedTimeAmount}
            />
            <View style={styles.buttonContainer}>
                <FlatButton
                    text={getButtonText()}
                    onPress={onPress}
                />
                <Spinner show={loading}/>
            </View>
        </View>
    )
};

CheckActions.propTypes = {
    onCheckIn: PropTypes.func,
    onCheckOut: PropTypes.func,
    checkInTime: PropTypes.string,
    checkedTimeAmount: PropTypes.any,
    loading: PropTypes.bool,
};

export default CheckActions;