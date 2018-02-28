export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setInputValue = ({ value, name }) => ({
    type: SET_INPUT_VALUE,
    value,
    name
});
