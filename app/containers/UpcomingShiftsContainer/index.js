import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, StatusBar, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Spinner } from '../../components/Spinner';
import { connectAlert } from '../../components/Alert';
import { PageTitleWithLogo } from '../../components/Title';
import { Container } from '../../components/Container';
import { ShiftItem } from './components/ShiftItem';
import { NoShifts } from './components/NoShifts';

import { fetchShifts, setSelectedShift, resetShifts } from '../../actions/shifts';

import styles from './styles';

class UpcomingShiftsContainer extends Component {
    static propTypes = {
        shifts: PropTypes.array,
        loading: PropTypes.bool,
        loaded: PropTypes.bool,
        fetchShifts: PropTypes.func,
        setSelectedShift: PropTypes.func,
        resetShifts: PropTypes.func,
    };

    componentWillMount() {
        this.props.fetchShifts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.fetchShiftsError) {
            this.props.alertWithType('error', 'Fetching error', nextProps.fetchShiftsError)
        }
    }

    _onShiftPress = (shift) => {
        this.props.setSelectedShift(shift);
        this.props.navigation.navigate('Checking');
    };

    _logout = () => {
        this.props.resetShifts();
        this.props.navigation.goBack();
    };

    _getRefreshControl = () => (
        <RefreshControl
            refreshing={false}
            onRefresh={this.props.fetchShifts}
        />
    );

    _getShifts = () => {
        if (this.props.shifts && this.props.shifts.length) {
            return this.props.shifts.map(shift => (
                <ShiftItem
                    key={shift.id}
                    style={styles.shiftItem}
                    onPress={() => this._onShiftPress(shift)}
                    {...shift}
                />
            ));
        } else if (this.props.loading && !this.props.loaded){
            return (<View><Spinner /></View>);
        } else {
            return (
                <NoShifts
                    onLogoutPress={this._logout}
                    onRefreshPress={this.props.fetchShifts}
                    refreshing={this.props.loading}
                />
            );
        }
    };

    render() {
        return (
            <Container>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView style={styles.container}>
                    <ScrollView
                        refreshControl={this._getRefreshControl()}
                        contentContainerStyle={{ flexGrow: 1 }}
                    >
                        <View style={styles.headContainer}>
                            <PageTitleWithLogo title={'Upcoming shifts'}/>
                        </View>
                        <View style={styles.mainContainer}>
                            {this._getShifts()}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { shifts, loading, error, loaded } = state.shifts;

    return {
        shifts,
        loading,
        loaded,
        fetchShiftsError: error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShifts: () => {
            dispatch(fetchShifts());
        },
        setSelectedShift: (shift) => {
            dispatch(setSelectedShift(shift));
        },
        resetShifts: () => {
            dispatch(resetShifts());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(connectAlert(UpcomingShiftsContainer));