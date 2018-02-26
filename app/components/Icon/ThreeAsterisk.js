import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ThreeAsterisk = () => (
    <View style={styles.containerInBorder}>
        <Text style={styles.textInBorder}>***</Text>
    </View>
);

ThreeAsterisk.propTypes = {

};

export default ThreeAsterisk;