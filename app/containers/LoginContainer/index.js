import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { PageTitleWithLogo } from '../../components/Title';
import { FlatButton } from '../../components/Button';
import LoginInputGroup from './components/LoginInputGroup';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$bgPrimary',
    },
    headContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContainer: {
        flex: 2,
        padding: 15,
        alignItems: 'center',
    },
    formContainer: {
        flex: 1,
        maxWidth: 300,
        alignItems: 'center',

    }
});

class LoginContainer extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headContainer}>
                    <PageTitleWithLogo title={'Check In & Check Out'} />
                </View>
                <View style={styles.mainContainer}>
                    <View
                        style={styles.formContainer}
                    >
                        <LoginInputGroup style={{ marginBottom: 40 }}/>
                        <FlatButton  title="Log In"/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default LoginContainer;
