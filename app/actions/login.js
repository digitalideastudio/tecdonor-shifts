export const RESET_LOGIN = 'RESET_LOGIN';
export const SET_LOGIN_INPUT_VALUE = 'SET_LOGIN_INPUT_VALUE';
export const LOG_IN = 'LOG_IN';
export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';
export const SET_LOGIN_DONE = 'SET_LOGIN_DONE';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export const resetLogin = () => ({
    type: RESET_LOGIN,
});

export const setInputValue = ({ value, name }) => ({
    type: SET_LOGIN_INPUT_VALUE,
    value,
    name,
});

export const logIn = () => ({
    type: LOG_IN,
});

export const setLoginLoading = (loading) => ({
    type: SET_LOGIN_LOADING,
    loading,
});

export const setLoginDone = () => ({
    type: SET_LOGIN_DONE
});

export const setLoginError = (error) => ({
    type: SET_LOGIN_ERROR,
    error
});
