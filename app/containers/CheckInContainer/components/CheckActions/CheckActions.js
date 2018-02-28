import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Timers from './Timers';
import { FlatButton } from '../../../../components/Button';

import styles from './styles';

const CheckActions = ({ onButtonPress }) => (
    <View style={styles.container}>
        <Timers />
        <View style={styles.buttonContainer}>
            <FlatButton
                text="CHECK OUT"
                onPress={onButtonPress}
            />
        </View>
    </View>
);

CheckActions.propTypes = {
    onButtonPress: PropTypes.func
};

export default CheckActions;