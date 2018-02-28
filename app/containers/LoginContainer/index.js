import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validate from 'validate.js';
import { getValidationErrorString } from '../../utils/validation';

import { setInputValue, logIn } from '../../actions/login';

import { Container } from '../../components/Container';
import { PageTitleWithLogo } from '../../components/Title';
import { FlatButton } from '../../components/Button';
import { Spinner } from '../../components/Spinner';
import { connectAlert } from '../../components/Alert';
import LoginInputGroup from './components/LoginInputGroup';

import validationRules from './validationRules';
import styles from './styles';

class LoginContainer extends Component {
    static propTypes = {
        username: PropTypes.string,
        password: PropTypes.string,
        onFieldChange: PropTypes.func,
        logIn: PropTypes.func,
        loading: PropTypes.bool,
        logged: PropTypes.bool,
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.logged) {
            this.props.navigation.navigate('UpcomingShifts');
        }
    }

    _onLoginPress = () => {
        const validateResult = validate(this.props, validationRules);
        if (validateResult) {
            const message = getValidationErrorString(validateResult);
            this.props.alertWithType('error', 'Validation error', message);
        } else {
            this.props.logIn();
        }
    };

    render() {
        const {
            username,
            password,
            onFieldChange,
            loading,
        } = this.props;

        return (
            <Container>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView style={styles.container} behavior="padding">
                        <View style={styles.headContainer}>
                            <PageTitleWithLogo title={'Check In & Check Out'} />
                        </View>
                        <View style={styles.mainContainer}>
                            <View
                                style={styles.formContainer}
                            >
                                <LoginInputGroup
                                    username={username}
                                    password={password}
                                    onFieldChange={onFieldChange}
                                />
                                <FlatButton
                                    text="Log In"
                                    style={styles.loginButton}
                                    onPress={this._onLoginPress}
                                />
                                <Spinner show={loading}/>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { username, password, loading, logged } = state.login;

    return {
        username,
        password,
        loading,
        logged
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: () => {
            dispatch(logIn());
        },
        onFieldChange: ({ name, value }) => {
            dispatch(setInputValue({ name, value }));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(connectAlert(LoginContainer));
