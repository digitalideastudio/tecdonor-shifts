import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Spinner = ({ show }) => {
    return !show ? null : (
        <View style={styles.container}>
            <ActivityIndicator
                size="small"
                color={styles.spinner.color}
            />
        </View>
    );
};

Spinner.propTypes = {
    show: PropTypes.bool,
};

export default Spinner;