import React from 'react';
import { View, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import userPicImage from './images/user-pic-example.jpg';

const styles = EStyleSheet.create({
    container: {
        width: 45,
        height: 45,
        borderRadius: 50,
        overflow: 'hidden'
    },
    image: {
        width: 45,
        height: 45,
    }
});

const UserPic = () => (
    <View
        style={styles.container}
    >
        <Image
            style={styles.image}
            source={userPicImage}
        />
    </View>
);

export default UserPic;
