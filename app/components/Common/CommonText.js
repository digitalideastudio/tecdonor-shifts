import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CommonText = ({ children, style, ...props }) => (
    <Text
        style={[styles.text, style]}
        {...props}
    >
        {children}
    </Text>
);

CommonText.propTypes = {
    children: PropTypes.string,
};

export default CommonText;