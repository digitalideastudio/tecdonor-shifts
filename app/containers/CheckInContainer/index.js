import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from '../../components/Container';
import { Footer } from './components/Footer';
import { BackgroundImage } from '../../components/BackgroundImage';
import { InputWithIcon } from '../../components/TextInput';
import { ThreeAsterisk } from '../../components/Icon';
import { FontAwesome as Icon } from '@expo/vector-icons';

import styles from './styles';

class CheckInContainer extends Component {
    render() {
        return (
            <Container>
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
                    <View style={styles.mainSpacer}/>
                    <View style={styles.inputContainer}>
                        <InputWithIcon
                            icon={<ThreeAsterisk/>}
                            buttonText={'CONFIRM'}
                            password
                            placeholder={'PERSONAL PIN'}
                            inputStyle={{ textAlign: 'center' }}
                            keyboardType={'numeric'}
                        />
                    </View>
                </View>
                <Footer/>
            </Container>
        );
    }
}

CheckInContainer.propTypes = {

};

export default CheckInContainer;