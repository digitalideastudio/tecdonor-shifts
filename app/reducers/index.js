import { combineReducers } from 'redux';

import login from './login';
import shifts from './shifts';

export default combineReducers({
    login,
    shifts
});
