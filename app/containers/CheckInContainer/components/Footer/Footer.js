import React from 'react';
import { View, TouchableOpacity, Text, Linking } from 'react-native';

import { Logo } from '../../../../components/Logo';

import styles from './styles';

const Footer = () => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Logo width={100}/>
        </View>
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

export default Footer;