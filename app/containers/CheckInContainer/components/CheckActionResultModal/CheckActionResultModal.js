import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import { FlatButton } from '../../../../components/Button';

import styles from './styles';

const CheckActionResultModal = ({ show, onHide }) => {

    return (
        <Modal
            isVisible={show}
            supportedOrientations={['portrait', 'landscape']}
            swipeDirection="down"
            onSwipe={onHide}
            onBackButtonPress={onHide}
        >
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    Welcome
                </Text>
                <Text style={styles.mainText}>
                    Check-out successful{"\n"}
                    Have a great time!
                </Text>
                <FlatButton
                    style={{ width: 150 }}
                    text="OK"
                    onPress={onHide}
                />
            </View>
        </Modal>
    )
};

CheckActionResultModal.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
};

export default CheckActionResultModal;