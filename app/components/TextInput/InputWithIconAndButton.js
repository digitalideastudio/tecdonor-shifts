import React from 'react';
import { View, TouchableWithoutFeedback, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { FlatButton } from '../Button';

import styles from './styles';

const InputWithIconAndButton = ({
                           placeholder,
                           icon,
                           password,
                           onButtonPress,
                           buttonText,
                           keyboardType,
                           style,
                           inputStyle,
                       }) => {
    let inputRef;

    const onIconPress = () => {
        inputRef.focus()
    };

    const getIcon = () => {
        if (icon) {
            return (
                <TouchableWithoutFeedback onPress={onIconPress}>
                    <View style={styles.iconContainer}>
                        {icon}
                    </View>
                </TouchableWithoutFeedback>
            );
        }
        return null;
    };

    const getButton = () => {
        if (buttonText) {
            return (
                <FlatButton
                    onPress={onButtonPress}
                    text={buttonText}
                    buttonStyle={styles.button}
                />
            )
        }
        return null;
    };

    return (
        <View>
            <View style={[styles.container, style]}>
                {getIcon()}
                <TextInput
                    style={[styles.input, inputStyle]}
                    placeholder={placeholder}
                    secureTextEntry={password}
                    underlineColorAndroid="transparent"
                    ref={ref => inputRef = ref }
                    keyboardType={keyboardType}
                />
                {getButton()}
            </View>
        </View>
    )
};

InputWithIconAndButton.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.element,
    password: PropTypes.bool,
    buttonText: PropTypes.string,
    onButtonPress: PropTypes.func,
    keyboardType: PropTypes.oneOf(['default', 'numeric', 'email-address', 'phone-pad']),
    style: PropTypes.any,
    inputStyle: PropTypes.any,
};

export default InputWithIconAndButton;