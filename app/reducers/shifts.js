import {
    RESET_SHIFTS,
    FETCH_SHIFTS,
    SET_SHIFTS_LOADING,
    SET_SHIFTS,
    SET_SHIFTS_ERROR,
    SET_SELECTED_SHIFT,
} from '../actions/shifts';

const initialState = () => ({
    shifts: [],
    selectedShift: {},
    loading: false,
    loaded: false,
    error: ''
});

export default (state = initialState, action) => {
    switch (action.type) {
        case RESET_SHIFTS:
            return {
                ...state,
                ...initialState(),
            };
        case FETCH_SHIFTS:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case SET_SHIFTS_LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        case SET_SHIFTS:
            return {
                ...state,
                shifts: action.shifts,
                loading: false,
                loaded: true,
            };
        case SET_SHIFTS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case SET_SELECTED_SHIFT:
            return {
                ...state,
                selectedShift: action.shift
            };
        default:
            return state;
    }
};
