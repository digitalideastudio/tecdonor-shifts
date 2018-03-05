import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Container = ({ children, keyboardDismiss }) => {
    if (keyboardDismiss) {
        return (
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <View style={styles.container}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        );
    }
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
};

export default Container;