import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CommonText = ({ children }) => (
    <Text style={styles.text}>{children}</Text>
);

CommonText.propTypes = {
    children: PropTypes.string
};

export default CommonText;