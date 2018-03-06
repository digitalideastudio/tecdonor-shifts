import { combineReducers } from 'redux';

import login from './login';
import shifts from './shifts';
import checking from './checking';

export default combineReducers({
    login,
    shifts,
    checking
});
