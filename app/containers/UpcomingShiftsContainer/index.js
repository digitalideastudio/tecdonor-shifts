import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CommonText } from '../../components/Common';
import { Spinner } from '../../components/Spinner';
import { connectAlert } from '../../components/Alert';
import { PageTitleWithLogo } from '../../components/Title';
import { Container } from '../../components/Container';
import { ShiftItem } from './components/ShiftItem';

import { fetchShifts, setSelectedShift } from '../../actions/shifts';

import styles from './styles';

class UpcomingShiftsContainer extends Component {
    static propTypes = {
        shifts: PropTypes.array,
        loading: PropTypes.bool,
        fetchShifts: PropTypes.func,
        setSelectedShift: PropTypes.func
    };

    componentDidMount() {
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
        } else if (this.props.loading){
            return (<View><Spinner /></View>);
        } else {
            return <CommonText>No shifts</CommonText>
        }
    };

    render() {
        return (
            <Container>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView style={styles.container}>
                    <ScrollView
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
    const { shifts, loading, error } = state.shifts;

    return {
        shifts,
        loading,
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(connectAlert(UpcomingShiftsContainer));