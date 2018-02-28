import React, { Component } from 'react';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { PageTitleWithLogo } from '../../components/Title';
import { Container } from '../../components/Container';
import ShiftItem from './components/ShiftItem';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$bgPrimary',
        flexDirection: 'row',
    },
    headContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        flex: 2,
        padding: 15,
    },
    shiftItem: {
        paddingBottom: 10,
        alignItems: 'center',
    },
});

class UpcomingShiftsContainer extends Component {
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
                            <View style={styles.shiftItem}>
                                <ShiftItem />
                            </View>
                            <View style={styles.shiftItem}>
                                <ShiftItem />
                            </View>
                            <View style={styles.shiftItem}>
                                <ShiftItem />
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Container>
        );
    }
}

UpcomingShiftsContainer.propTypes = {};

export default UpcomingShiftsContainer;