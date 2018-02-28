import React, { Component } from 'react';
import { View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageTitleWithLogo } from '../../components/Title';
import { FlatButton } from '../../components/Button';
import { Container } from '../../components/Container';
import LoginInputGroup from './components/LoginInputGroup';

import { setInputValue } from '../../actions/login';

import styles from './styles';

class LoginContainer extends Component {
    static propTypes = {
        username: PropTypes.string,
        password: PropTypes.string,
        dispatch: PropTypes.func
    };

    _onFieldChange = ({ name, value }) => {
        this.props.dispatch(setInputValue({ name, value }));
    };

    render() {
        const { username, password } = this.props;

        return (
            <Container>
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
                                    style={{ marginBottom: 40 }}
                                    username={username}
                                    password={password}
                                    onFieldChange={this._onFieldChange}
                                />
                                <FlatButton
                                    text="Log In"
                                    style={styles.loginButton}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { username, password } = state.login;

    return {
        username,
        password
    }
};

export default connect(mapStateToProps)(LoginContainer);
