import React, { Component } from 'react';
import { View, Text, StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validate from 'validate.js';

import { Container } from '../../components/Container';
import { BackgroundImage } from '../../components/BackgroundImage';
import { Spinner } from '../../components/Spinner';
import { Footer } from './components/Footer';
import { PinInput } from './components/PinInput';
import { CheckActions } from './components/CheckActions';
import { CheckActionResultModal } from './components/CheckActionResultModal';
import { connectAlert } from '../../components/Alert';

import { getValidationErrorString } from '../../utils/validation';
import { setPin, fetchShiftStatus, checkInOut, resetChecking } from '../../actions/checking';
import { CHECK_TYPE_IN, CHECK_TYPE_OUT } from '../../config/constans';

import validationRules from './validationRules';
import styles from './styles';

class CheckInContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowModal: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checkingError) {
            this.props.alertWithType('error', 'Error', nextProps.checkingError)
        }
        if (nextProps.checkingResultMessage) {
            this._showModal();
        }
    };

    _backToShifts = () => {
        this.props.resetChecking();
        this.props.navigation.goBack();
    };

    _hideModal = () => {
        this.setState({ isShowModal: false });
        this.props.resetChecking();
    };

    _showModal = () => {
        this.setState({ isShowModal: true });
    };

    _onConfirmPress = () => {
        const { pin, id } = this.props;
        const validateResult = validate(this.props, validationRules);
        if (validateResult) {
            const message = getValidationErrorString(validateResult);
            this.props.alertWithType('error', 'Validation error', message);
        } else {
            this.props.fetchShiftStatus(pin, id);
        }
    };

    _onCheckInPress = () => {
        const { pin, id, checkInOut } = this.props;
        checkInOut(pin, id, CHECK_TYPE_IN);
    };

    _onCheckOutPress = () => {
        const { pin, id , checkInOut } = this.props;
        checkInOut(pin, id, CHECK_TYPE_OUT);
    };

    _getMainElement = () => {
        const { isPinVerified, pin, checkInTime, checkedTimeAmount, checkLoading } = this.props;
        if (isPinVerified) {
            return (
                <CheckActions
                    onCheckIn={this._onCheckInPress}
                    onCheckOut={this._onCheckOutPress}
                    checkInTime={checkInTime}
                    checkedTimeAmount={checkedTimeAmount}
                    loading={checkLoading}
                />
            )
        } else {
            return (
                <PinInput
                    value={pin}
                    onChange={this.props.setPin}
                    onButtonPress={this._onConfirmPress}
                />
            )
        }
    };

    render() {
        const { title, opportunityName, loading, imageUrl, checkingResultMessage } = this.props;
        return (
            <Container keyboardDismiss={true}>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView
                    behavior={'padding'}
                    style={{ flex: 1 }}
                >
                    <View style={styles.header}>
                        <BackgroundImage
                            url={imageUrl}
                            blurStyle={styles.headerBlurBg}
                        />
                        <View style={styles.titles}>
                            <View>
                                <Text
                                    style={styles.pageTitleText}
                                    allowFontScaling
                                    numberOfLines={3}
                                >
                                    {title}
                                </Text>
                                <Text style={styles.pageSubTitleText}>
                                    {opportunityName}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.main}>
                        {this._getMainElement()}
                        <Spinner show={loading}/>
                    </View>
                </KeyboardAvoidingView>
                <Footer onLogoPress={this._backToShifts}/>
                <CheckActionResultModal
                    show={this.state.isShowModal}
                    onHide={this._hideModal}
                    text={checkingResultMessage}
                />
            </Container >
        );
    }
}

CheckInContainer.propTypes = {
    title: PropTypes.string,
    opportunityName: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    imageUrl: PropTypes.string,
    checkingError: PropTypes.string,
    loading: PropTypes.bool,
    isPinVerified: PropTypes.bool,
    checkInTime: PropTypes.string,
    checkedTimeAmount: PropTypes.any,
    checkingResultMessage: PropTypes.string,
    setPin: PropTypes.func,
    alertWithType: PropTypes.func,
    checkInOut: PropTypes.func,
    resetChecking: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        ...state.shifts.selectedShift,
        pin: state.checking.pin,
        checkingError: state.checking.error,
        loading: state.checking.loading,
        isPinVerified: state.checking.isPinVerified,
        checkInTime: state.checking.checkInTime,
        checkedTimeAmount: state.checking.checkedTimeAmount,
        checkingResultMessage: state.checking.checkingResultMessage,
        checkLoading: state.checking.checkLoading,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPin: (pin) => {
            dispatch(setPin(pin));
        },
        fetchShiftStatus: (pin, shiftId) => {
            dispatch(fetchShiftStatus({ pin, shiftId }));
        },
        checkInOut: (pin, shiftId, type) => {
            dispatch(checkInOut({ pin, shiftId, type }));
        },
        resetChecking: () => {
            dispatch(resetChecking())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(connectAlert(CheckInContainer));