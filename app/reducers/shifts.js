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
            location: '{"lat":22.7598611,"lng":70.841725,"name":"Lilapar, Gujarat, India"}',
            shiftTitle: 'Some shift title',
            shiftDescription: 'Another shift description',
            start: '2018-03-01 08:00:00',
            volunteers: 143
        },
        {
            color: '#ff00ff',
            id: '2544c937-5150-f670-b759-6e589898ceaa',
            location: null,
            shiftTitle: 'Halo halo hey',
            shiftDescription: 'It;s ablasdfasdf asdf a',
            start: '2018-04-14 23:30:00',
            volunteers: 1
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
            };
        default:
            return state;
    }
};
