import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { theme } from '../../../config/theme';

import { InputWithIconAndButton } from '../../../components/TextInput';

const styles = EStyleSheet.create({
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

const LoginInputGroup = ({ style, username, password, onFieldChange }) => (
    <View style={style}>
        <InputWithIconAndButton
            placeholder={'username'}
            icon={<Icon name="user" color={theme.$firmColor1} size={42} />}
            style={styles.topInput}
            onChangeText={value => onFieldChange({ name: 'username', value })}
            value={username}
        />
        <InputWithIconAndButton
            placeholder={'password'}
            icon={<Icon name="lock" color={theme.$firmColor2} size={42} />}
            style={styles.bottomInput}
            value={password}
            onChangeText={value => onFieldChange({ name: 'password', value })}
            password
        />
    </View>
);

LoginInputGroup.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onFieldChange: PropTypes.func
};

export default LoginInputGroup;