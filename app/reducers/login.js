import {
    SET_LOGIN_INPUT_VALUE,
    SET_LOGIN_LOADING,
    SET_LOGIN_DONE,
    SET_LOGIN_ERROR,
    LOG_IN
} from '../actions/login';

const initialState = {
    email: '',
    password: '',
    loading: false,
    logged: false,
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                error: '',
                loading: true
            };
        case SET_LOGIN_INPUT_VALUE:
            return {
                ...state,
                [action.name]: action.value
            };
        case SET_LOGIN_LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case SET_LOGIN_DONE:
            return {
                ...state,
                loading: false,
                logged: true
            };
        case SET_LOGIN_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state;
    }
};