import {
    FETCH_SHIFTS,
    SET_SHIFTS_LOADING,
    SET_SHIFTS,
} from '../actions/shifts';

const initialState = {
    shifts: [
        {
            color: '#20a0ff',
            id: '2544c937-5150-41d3-b759-6e589898deca',
            location: '{"lat":22.7598611,“lng":70.841725,“name":“Lilapar, Gujarat, India"}',
            shift_title: 'Some shift title',
            shift_description: 'Another shift description',
            start: '2018-03-01 08:00:00',
        },
    ],
    loading: false,
    loaded: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SHIFTS:
            return {
                ...state,
                loading: true,
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
            }
    }
};
