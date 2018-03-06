export const SET_PIN = 'SET_PIN';
export const SET_CHECKING_ERROR = 'SET_CHECKING_ERROR';
export const FETCH_SHIFT_STATUS = 'FETCH_SHIFT_STATUS';
export const SET_IS_PIN_VERIFIED = 'SET_IS_PIN_VERIFIED';
export const CHECK_IN_OUT = 'CHECK_IN';
export const SET_CHECKING_TIME = 'SET_CHECKING_TIME';
export const SET_CHECKING_RESULT_MESSAGE = 'SET_CHECKING_RESULT_MESSAGE';
export const RESET_CHECKING = 'RESET_CHECKING';

export const setPin = pin => ({
    type: SET_PIN,
    pin,
});

export const fetchShiftStatus = ({ pin, shiftId }) => ({
    type: FETCH_SHIFT_STATUS,
    pin,
    shiftId,
});

export const checkInOut = ({ pin, shiftId, type }) => ({
    type: CHECK_IN_OUT,
    pin,
    shiftId,
    checkType: type
});

export const resetChecking = () => ({
    type: RESET_CHECKING
});
