import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import LogoImage from './img/tecdonor.png';
import styles from './styles';

const logoDim = Image.resolveAssetSource(LogoImage);

const Logo = (props) => {
    let width, height;
    if (props.width) {
        height = logoDim.height / (logoDim.width / props.width);
        width = props.width;
    } else if (props.height) {
        width = logoDim.width / (logoDim.height / props.height);
        height = props.height;
    }

    return (
        <Image
            source={LogoImage}
            style={[styles.logo, { width, height }]}
        />
    )
};



export default Logo;