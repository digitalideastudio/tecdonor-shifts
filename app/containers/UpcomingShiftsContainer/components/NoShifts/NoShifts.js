import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { CommonText } from '../../../../components/Common';
import { FlatButton } from '../../../../components/Button';
import { Spinner } from '../../../../components/Spinner';

import styles from './styles';

const NoShifts = ({ onLogoutPress, onRefreshPress, refreshing }) => (
    <View style={styles.container}>
        <CommonText
            style={styles.text}
        >
            No Shifts
        </CommonText>
        <View style={styles.refreshButtonContainer}>
            <FlatButton
                style={styles.button}
                text="Refresh"
                onPress={onRefreshPress}
            />
            <Spinner show={refreshing} size="small"/>
        </View>
        <View style={styles.logoutButtonContainer}>
            <FlatButton
                style={[styles.button, styles.logoutButton]}
                text="Logout"
                onPress={onLogoutPress}
            />
        </View>
    </View>
);

NoShifts.propTypes = {
    onLogoutPress: PropTypes.func,
    onRefreshPress: PropTypes.func,
};

export default NoShifts;