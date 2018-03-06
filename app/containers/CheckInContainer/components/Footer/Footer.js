import React from 'react';
import { View, TouchableOpacity, Text, Linking } from 'react-native';
import PropTypes from 'prop-types';

import { Logo } from '../../../../components/Logo';

import styles from './styles';

const Footer = ({ onLogoPress }) => (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={onLogoPress}
            style={styles.logoContainer}
        >
            <Logo width={100}/>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.linkContainer}
            onPress={() => Linking.openURL('https://tecdonor.com')}
        >
            <Text style={styles.linkText}>
                tecdonor.com
            </Text>
        </TouchableOpacity>
    </View>
);

Footer.propTypes = {
    onLogoPress: PropTypes.func
};

export default Footer;