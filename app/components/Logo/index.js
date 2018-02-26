import React from 'react';
import { Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LogoImage from './img/tecdonor.png';

const styles = EStyleSheet.create({
    logo: {
        resizeMode: 'contain',
        width: '100%'
    }
});

const Logo = () => (
    <Image
        source={LogoImage}
        style={styles.logo}
    />
);

export default Logo;