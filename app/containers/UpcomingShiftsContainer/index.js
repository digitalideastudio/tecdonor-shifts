import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchShifts } from '../../actions/shifts';

import { PageTitleWithLogo } from '../../components/Title';
import { Container } from '../../components/Container';
import { ShiftItem } from './components/ShiftItem';

import styles from './styles';

class UpcomingShiftsContainer extends Component {
    static propTypes = {
        shifts: PropTypes.array,
        loading: PropTypes.bool,
        fetchShifts: PropTypes.func,
    };

    _getShifts = () => {
        return this.props.shifts.map(shift => (
            <ShiftItem
                key={shift.id}
                style={styles.shiftItem}
                {...shift}
            />
        ));
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
    const { shifts, loading } = state.shifts;

    return {
        shifts,
        loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShifts: () => {
            dispatch(fetchShifts());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingShiftsContainer);