import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Spinner = ({ show, size = 'large', overlap = true, ...props }) => {
    const containerStyles = [styles.container];
    if (!overlap) containerStyles.push(styles.relative);

    return show === false ? null : (
        <View style={containerStyles}>
            <ActivityIndicator
                size={size}
                {...props}
            />
        </View>
    );
};

Spinner.propTypes = {
    show: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large'])
};

export default Spinner;