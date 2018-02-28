import React, { Component } from 'react';
import { View, SafeAreaView, KeyboardAvoidingView } from 'react-native';

import { PageTitleWithLogo } from '../../components/Title';
import { FlatButton } from '../../components/Button';
import LoginInputGroup from './components/LoginInputGroup';

import styles from './styles';

class LoginContainer extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                    <View style={styles.headContainer}>
                        <PageTitleWithLogo title={'Check In & Check Out'} />
                    </View>
                    <View style={styles.mainContainer}>
                        <View
                            style={styles.formContainer}
                        >
                            <LoginInputGroup style={{ marginBottom: 40 }}/>
                            <FlatButton
                                text="Log In"
                                style={styles.loginButton}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

export default LoginContainer;
