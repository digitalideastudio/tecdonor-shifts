import React from 'react';
import { Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    text: {
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        color: '$pageTitleColor',
        ...Platform.select({
            ios: {
                fontFamily: 'Helvetica',
            },
            android: {
                fontFamily: 'sans-serif'
            }
        })
    }
});

const PageTitle = ({ children }) => (
    <Text style={styles.text}>
        {children}
    </Text>
);

PageTitle.propTypes = {
    children: PropTypes.string
};

export default PageTitle;