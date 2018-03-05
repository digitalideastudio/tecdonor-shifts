import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BackgroundImage = ({ source, blurStyle }) => {
    return (
        <View style={styles.container}>
            <Image
                source={source}
                style={styles.image}
            />
            <View style={[styles.container, blurStyle]}/>
        </View>
    )
};

BackgroundImage.propTypes = {
    source: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    blurStyle: PropTypes.any
};

export default BackgroundImage;