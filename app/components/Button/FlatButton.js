import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '$firmColor1',
        borderRadius: '$inputBorderRadius',
        padding: 15,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        fontFamily: '$commonFontFamily',
        color: '$colorOnDark',
        fontSize: 16,
        lineHeight: 19,
    },
});

const FlatButton = ({ title }) => (
    <View style={styles.container}>
        <TouchableHighlight
            style={styles.button}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableHighlight>
    </View>
);

FlatButton.propTypes = {
    title: PropTypes.string.isRequired,
};

export default FlatButton;