import {
    SET_LOGIN_INPUT_VALUE,
    SET_LOGIN_LOADING,
    SET_LOGIN_DONE,
    LOG_IN
} from '../actions/login';

const initialState = {
    username: '',
    password: '',
    loading: false,
    logged: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
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
        default:
            return state;
    }
};