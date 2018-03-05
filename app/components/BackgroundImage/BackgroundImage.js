import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BackgroundImage = ({ source, blurStyle }) => {
    const getImage = () => {
        console.log(source);
        if (source) {
            return (
                <Image
                    source={source}
                    style={styles.image}
                />
            )
        }
        return nul;
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
    blurStyle: PropTypes.any,
};

export default BackgroundImage;