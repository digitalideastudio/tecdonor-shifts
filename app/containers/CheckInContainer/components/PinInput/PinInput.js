import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { InputWithIconAndButton } from '../../../../components/TextInput';
import { ThreeAsterisk } from '../../../../components/Icon';

import styles from './styles';

const PinInput = ({ onChange, value, onButtonPress }) => (
    <View style={styles.container}>
        <View style={styles.mainSpacer}/>
        <View style={styles.inputContainer}>
            <InputWithIconAndButton
                icon={<ThreeAsterisk/>}
                buttonText={'CONFIRM'}
                password
                placeholder={'PERSONAL PIN'}
                inputStyle={{ textAlign: 'center' }}
                keyboardType={'numeric'}
                onChangeText={onChange}
                value={value}
                onButtonPress={onButtonPress}
            />
        </View>
    </View>
);

PinInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onButtonPress: PropTypes.func,
};

export default PinInput;