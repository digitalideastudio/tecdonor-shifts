import Moment from 'moment';
import {
    SET_PIN,
    SET_CHECKING_ERROR,
    SET_CHECKING_RESULT_MESSAGE,
    FETCH_SHIFT_STATUS,
    SET_IS_PIN_VERIFIED,
    SET_CHECKING_TIME,
    CHECK_IN_OUT,
    RESET_CHECKING
} from '../actions/checking';

const initialState = () => ({
    // TODO: remove hardcoded pin
    pin: '',
    loading: false,
    checkLoading: false,
    error: '',
    checkingResultMessage: '',
    isPinVerified: false,
    checkInTime: '',
    checkedTimeAmount: null,
});

export default (state = initialState(), action) => {
    switch (action.type) {
        case SET_PIN:
            return {
                ...state,
                pin: action.pin,
            };
        case FETCH_SHIFT_STATUS:
            return {
                ...state,
                loading: true,
                error: '',

                checkInTime: '',
                checkedTimeAmount: 0
            };
        case CHECK_IN_OUT:
            return {
                ...state,
                checkLoading: true,
                checkingResultMessage: '',
                error: '',
            };
        case SET_CHECKING_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                checkLoading: false
            };
        case SET_CHECKING_RESULT_MESSAGE:
            return {
                ...state,
                checkLoading: false,
                checkingResultMessage: action.message
            };
        case SET_IS_PIN_VERIFIED:
            return {
                ...state,
                isPinVerified: action.isPinVerified,
                loading: false
            };
        case SET_CHECKING_TIME:
            const inTime = action.checkingTime.in;
            const outTime = action.checkingTime.out;
            let amount = Moment.duration(0);
            let checkInTime = '';

            Object.keys(inTime).forEach((checkId) => {
                if (outTime[checkId]) {
                    amount.add(Moment.duration(Moment(outTime[checkId]).diff(inTime[checkId])));
                } else {
                    checkInTime = inTime[checkId];
                }
            });

            return {
                ...state,
                checkInTime,
                checkedTimeAmount: amount
            };
        case RESET_CHECKING:
            return {
                ...state,
                ...initialState()
            };
        default:
            return state;
    }
};