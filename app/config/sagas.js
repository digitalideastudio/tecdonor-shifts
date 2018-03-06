import { takeEvery, call, put, select } from 'redux-saga/effects';

import {
    LOG_IN,
    SET_LOGIN_DONE,
    SET_LOGIN_ERROR,
} from '../actions/login';
import {
    SET_SHIFTS,
    FETCH_SHIFTS,
    SET_SHIFTS_ERROR
} from '../actions/shifts';
import {
    FETCH_SHIFT_STATUS,
    SET_CHECKING_ERROR,
    SET_IS_PIN_VERIFIED,
    CHECK_IN_OUT,
    SET_CHECKING_TIME,
    SET_CHECKING_RESULT_MESSAGE
} from '../actions/checking';
import { getValidationErrorString } from '../utils/validation';
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

export const getShiftStatus = ({ pin, shiftId }) => fetch(
    `${apiUrls.GET_SHIFT_STATUS}?pin=${pin}&shiftId=${shiftId}`
);

export const doCheckInOut = ({ pin, shiftId, type }) => fetch(apiUrls.CHECK_IN_OUT, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        pin,
        shiftId,
        type
    })
});

const fetchLogin = function* (action) {
    try {
        const { email, password } = yield select(state => state.login);
        const response = yield call(doLogin, { email, password });
        const result = yield response.json();
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
        console.log(result);
        if (Array.isArray(result)) {
            yield put({ type: SET_SHIFTS, shifts: result });
        } else {
            yield put({ type: SET_SHIFTS_ERROR, error: 'Something wrong. Please, try later!' });
        }
    } catch (error) {
        yield put({ type: SET_SHIFTS_ERROR, error: 'Something wrong. Please, try later!' });
    }
};

const fetchShiftStatus = function* ({ pin, shiftId }) {
    try {
        const response = yield call(getShiftStatus, { pin, shiftId });
        console.log(response);
        const result = yield response.json();
        console.log(result);
        if (result.errors) {
            const message = getValidationErrorString(result.errors);
            yield put({ type: SET_CHECKING_ERROR, error: message });
        } else {
            if (result.in) {
                yield put({ type: SET_CHECKING_TIME, checkingTime: result });
            }
            yield put({ type: SET_IS_PIN_VERIFIED, isPinVerified: true })
        }
    } catch (error) {
        yield put({ type: SET_CHECKING_ERROR, error: 'Something wrong. Please, try later!' });
    }
};

const checkInOut = function* ({ pin, shiftId, checkType: type }) {
    try {
        const response = yield call(doCheckInOut, { pin, shiftId, type });
        const result = yield response.json();
        if (result.errors) {
            const message = getValidationErrorString(result.errors);
            yield put({ type: SET_CHECKING_ERROR, error: message });
        } else {
            yield call(fetchShiftStatus, { pin, shiftId });
            yield put({ type: SET_CHECKING_RESULT_MESSAGE, message: result.message });
        }
    } catch (error) {
        yield put({ type: SET_CHECKING_ERROR, error: 'Something wrong. Please, try later!' });
    }
};


const rootSaga = function* () {
    yield takeEvery(LOG_IN, fetchLogin);
    yield takeEvery(FETCH_SHIFTS, fetchShifts);
    yield takeEvery(FETCH_SHIFT_STATUS, fetchShiftStatus);
    yield takeEvery(CHECK_IN_OUT, checkInOut);
};

export default rootSaga;