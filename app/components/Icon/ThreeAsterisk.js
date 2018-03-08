import React from 'react';
import { View, Image } from 'react-native';
import ThreeAsteriskImage from './images/three-sterisk.png';

import styles from './styles';

const ThreeAsterisk = () => (
    <View style={styles.threeAsteriskContainer}>
        <Image
            style={styles.imageIcon}
            source={ThreeAsteriskImage}
        />
    </View>
);

ThreeAsterisk.propTypes = {

};

export default ThreeAsterisk;