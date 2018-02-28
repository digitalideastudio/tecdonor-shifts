import React from 'react';
import { Provider } from 'react-redux';
import LoginContainer from './containers/LoginContainer';
import UpcomingShiftsContainer from './containers/UpcomingShiftsContainer';
import CheckInContainer from './containers/CheckInContainer';

import store from './config/store';
// Import theme style variables
import './config/theme';


export default () => (
    <Provider store={store}>
        <LoginContainer />
    </Provider>
);
