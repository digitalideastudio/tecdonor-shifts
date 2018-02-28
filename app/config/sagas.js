import { takeEvery, call, put, select } from 'redux-saga/effects';

import {
    LOG_IN,
    SET_LOGIN_LOADING,
    SET_LOGIN_DONE
} from '../actions/login';
import {
    SET_SHIFTS,
    SET_SHIFTS_LOADING,
    FETCH_SHIFTS,
} from '../actions/shifts';
import * as apiUrls from './api';

export const doLogin = ({ username, password }) => fetch(apiUrls.LOGIN, {
    method: 'POST',
    body: JSON.stringify({
        email: username,
        password
    })
});

export const getShifts = ({ userId = 0 }) => fetch(apiUrls.GET_SHIFTS);

const fetchLogin = function* (action) {
    try {
        // yield put({ type: SET_LOGIN_LOADING, loading: true });
        const { username, password } = yield select(state => state.login);
        const response = yield call(doLogin, { username, password });
        yield put({ type: SET_LOGIN_DONE });
    } catch (error) {
        yield put({ type: SET_LOGIN_LOADING, loading: false });
        console.log(error);
    }
};

const fetchShifts = function* (action) {
    try {
        const response = yield call(getShifts);
        yield put({ type: SET_SHIFTS });
    } catch (error) {
        yield put({ type: SET_SHIFTS_LOADING, loading: false });
    }
};

const rootSaga = function* () {
    yield takeEvery(LOG_IN, fetchLogin);
    yield takeEvery(FETCH_SHIFTS, fetchShifts);
};

export default rootSaga;