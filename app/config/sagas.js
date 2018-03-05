import { takeEvery, call, put, select } from 'redux-saga/effects';

import {
    LOG_IN,
    SET_LOGIN_DONE,
    SET_LOGIN_ERROR,
} from '../actions/login';
import {
    SET_SHIFTS,
    SET_SHIFTS_LOADING,
    FETCH_SHIFTS,
    SET_SHIFTS_ERROR
} from '../actions/shifts';
import * as apiUrls from './api';

export const doLogin = ({ email, password }) => fetch(apiUrls.LOGIN, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email,
        password
    })
});

export const getShifts = () => fetch(apiUrls.GET_SHIFTS);

const fetchLogin = function* (action) {
    try {
        // yield put({ type: SET_LOGIN_LOADING, loading: true });
        const { email, password } = yield select(state => state.login);
        const response = yield call(doLogin, { email, password });
        const result = yield response.json();
        console.log(result);
        if (result.errors) {
            yield put({ type: SET_LOGIN_ERROR, error: result.errors.message });
        } else {
            yield put({ type: SET_LOGIN_DONE });
        }
    } catch (error) {
        yield put({ type: SET_LOGIN_ERROR, error });
    }
};

const fetchShifts = function* (action) {
    try {
        const response = yield call(getShifts);
        const result = yield response.json();
        if (Array.isArray(result)) {
            yield put({ type: SET_SHIFTS, shifts: result });
        } else {
            yield put({ type: SET_SHIFTS_ERROR, error: 'Something wrong. Please, try later!' });
        }
    } catch (error) {
        yield put({ type: SET_SHIFTS_ERROR, error: 'Something wrong. Please, try later!' });
    }
};

const rootSaga = function* () {
    yield takeEvery(LOG_IN, fetchLogin);
    yield takeEvery(FETCH_SHIFTS, fetchShifts);
};

export default rootSaga;