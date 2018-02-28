import {
    SET_INPUT_VALUE
} from '../actions/login';

const initialState = {
    username: '',
    password: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {
                ...state,
                [action.name]: action.value
            };
        default:
            return state;
    }
};