import { takeEvery, call, select } from 'redux-saga/effects';

import { LOG_IN } from '../actions/login';

export const doLogin = ({ username, password }) => fetch('https://staging.tecdonor.com/login', {
    method: 'POST',
    body: JSON.stringify({
        email: username,
        password
    })
});

const fetchLogin = function* (action) {
    try {
        const { username, password } = yield select(state => state.login);
        const response = yield call(doLogin, { username, password });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

const rootSaga = function* () {
    yield takeEvery(LOG_IN, fetchLogin);
};

export default rootSaga;