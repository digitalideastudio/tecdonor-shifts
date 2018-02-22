import React from 'react';
import { View, TouchableWithoutFeedback, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: '$inputBorderWidth',
        borderColor: '$inputBorderColor',
        borderRadius: '$inputBorderRadius',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        color: '$inputText',
        fontSize: '$inputFontSize',
    },
});


const InputWithIcon = ({ placeholder, icon, password, style }) => {
    let inputRef;

    onPress = () => {
        inputRef.focus()
    };

    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <View style={[styles.container, style]}>
                <View style={styles.iconContainer}>
                    {React.cloneElement(icon, { size: 42 })}
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={password}
                    underlineColorAndroid="transparent"
                    ref={ref => inputRef = ref }
                />
            </View>
        </TouchableWithoutFeedback>
    )
};

InputWithIcon.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.element.isRequired,
    password: PropTypes.bool,
};

export default InputWithIcon;