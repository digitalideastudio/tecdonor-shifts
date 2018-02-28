import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const FlatButton = ({ text, style, onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    </View>
);

FlatButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
};

export default FlatButton;