import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { theme } from '../../../config/theme';

import { InputWithIcon } from '../../../components/TextInput';

const styles = EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    topInput: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    bottomInput: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTopWidth: 0
    }
});

const LoginInputGroup = ({ style }) => (
    <View style={[styles.container, style]}>
        <InputWithIcon
            placeholder={'username'}
            icon={<Icon name="user" color={theme.$firmColor1}/>}
            style={styles.topInput}
        />
        <InputWithIcon
            placeholder={'password'}
            icon={<Icon name="lock" color={theme.$firmColor2}/>}
            style={styles.bottomInput}
            password
        />
    </View>
);

LoginInputGroup.propTypes = {

};

export default LoginInputGroup;