import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Spinner = ({ show, size = 'large' }) => {
    return show === false ? null : (
        <View style={styles.container}>
            <ActivityIndicator
                size={size}
            />
        </View>
    );
};

Spinner.propTypes = {
    show: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large'])
};

export default Spinner;