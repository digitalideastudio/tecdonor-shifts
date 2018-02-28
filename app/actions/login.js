export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const LOG_IN = 'LOG_IN';

export const setInputValue = ({ value, name }) => ({
    type: SET_INPUT_VALUE,
    value,
    name
});

export const logIn = () => ({
    type: LOG_IN
});
