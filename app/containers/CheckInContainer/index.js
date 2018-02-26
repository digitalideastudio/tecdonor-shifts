import React, { Component } from 'react';
import { View, Text, StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { Footer } from './components/Footer';
import { PinInput } from './components/PinInput';
import { Container } from '../../components/Container';
import { BackgroundImage } from '../../components/BackgroundImage';

import styles from './styles';

class CheckInContainer extends Component {
    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView
                    behavior={'padding'}
                    style={{ flex: 1 }}
                >
                    <View style={styles.header}>
                        <BackgroundImage
                            source={{ uri: 'https://tecdonor-devedge.s3.amazonaws.com/photos/b58ffb817335568fbfbe7d1c4935c22e/ecf9c7b87de0c2ff0090bbea25cc72ca.jpg' }}
                        />
                        <View style={styles.titles}>
                            <View>
                                <Text style={styles.pageTitleText}>
                                    Children's Hope
                                </Text>
                                <Text style={styles.pageSubTitleText}>
                                    Offered by: Hopely
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.main}>
                        <PinInput/>
                    </View>
                </KeyboardAvoidingView>
                <Footer/>
            </Container >
        );
    }
}

CheckInContainer.propTypes = {};

export default CheckInContainer;