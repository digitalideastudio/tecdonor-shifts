import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const FlatButton = ({ text, buttonStyle }) => (
    <View style={styles.container}>
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    </View>
);

FlatButton.propTypes = {
    text: PropTypes.string.isRequired
};

export default FlatButton;