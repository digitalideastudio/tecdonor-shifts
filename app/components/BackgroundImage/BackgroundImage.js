import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    }
});

const BackgroundImage = ({ source }) => {
    return (
        <View style={styles.container}>
            <Image
                source={source}
                style={styles.image}
            />
        </View>
    )
};

BackgroundImage.propTypes = {

};

export default BackgroundImage;