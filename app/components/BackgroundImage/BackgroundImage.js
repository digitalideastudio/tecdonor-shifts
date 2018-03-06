import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BackgroundImage = ({ source, blurStyle, url }) => {
    const getImage = () => {
        if (source || url) {
            const src = source ? source : { uri: url };
            return (
                <Image
                    source={src}
                    style={styles.image}
                />
            )
        }
        return null;
    };
    return (
        <View style={styles.container}>
            {getImage()}
            <View style={[styles.container, blurStyle]}/>
        </View>
    )
};

BackgroundImage.propTypes = {
    source: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    url: PropTypes.string,
    blurStyle: PropTypes.any,
};

export default BackgroundImage;