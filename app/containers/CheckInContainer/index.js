import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { textShadow } from '../../config/theme';

import { BackgroundImage } from '../../components/BackgroundImage';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$bgPrimary'
    },
    header: {
        flex: 2,
    },
    titles: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
        alignItems: 'center'
    },
    pageTitleText: {
        fontSize: '$h1FontSize',
        color: '$colorOnDark',
        textAlign: 'center',
        ...textShadow
    },
    pageSubTitleText: {
        fontSize: '$h3FontSize',
        color: '$colorOnDark2',
        textAlign: 'center',
        ...textShadow
    },
    main: {
        flex: 3

    }
});

class CheckInContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
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

                </View>
            </View>
        );
    }
}

CheckInContainer.propTypes = {

};

export default CheckInContainer;