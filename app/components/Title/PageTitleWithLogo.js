import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import Logo from '../Logo';
import PageTitle from './PageTitle';

const styles = EStyleSheet.create({
    container: {
        paddingTop: 10
    },
    logoContainer: {
        marginBottom: 10
    }
});

const PageTitleWithLogo = ({ title }) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Logo/>
        </View>
        <PageTitle>
            { title }
        </PageTitle>
    </View>
);

PageTitleWithLogo.propTypes = {
    title: PropTypes.string
};

export default PageTitleWithLogo;