import { StackNavigator } from 'react-navigation';

import LoginContainer from '../containers/LoginContainer';
import UpcomingShiftsContainer from '../containers/UpcomingShiftsContainer';
import CheckInContainer from '../containers/CheckInContainer';

export default StackNavigator({
    Login: {
        screen: LoginContainer
    },
    UpcomingShifts: {
        screen: UpcomingShiftsContainer
    },
    Checking: {
        screen: CheckInContainer
    }
}, {
    // initialRouteName: 'UpcomingShifts',
    navigationOptions: {
        header: null
    }
});
