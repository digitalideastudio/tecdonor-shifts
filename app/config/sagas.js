import { takeEvery, call, put, select } from 'redux-saga/effects';

import {
    LOG_IN,
    SET_LOGIN_LOADING,
    SET_LOGIN_DONE
} from '../actions/login';

export const doLogin = ({ username, password }) => fetch('https://staging.tecdonor.com/login', {
    method: 'POST',
    body: JSON.stringify({
        email: username,
        password
    })
});

const fetchLogin = function* (action) {
    try {
        yield put({ type: SET_LOGIN_LOADING, loading: true });
        const { username, password } = yield select(state => state.login);
        const response = yield call(doLogin, { username, password });
        yield put({ type: SET_LOGIN_DONE });
    } catch (error) {
        yield put({ type: SET_LOGIN_LOADING, loading: false });
        console.log(error);
    }
};

const rootSaga = function* () {
    yield takeEvery(LOG_IN, fetchLogin);
};

export default rootSaga;