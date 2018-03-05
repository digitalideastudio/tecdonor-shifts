export const FETCH_SHIFTS = 'FETCH_SHIFTS';
export const SET_SHIFTS = 'SET_SHIFTS';
export const SET_SHIFTS_LOADING = 'SET_SHIFTS_LOADING';
export const SET_SHIFTS_ERROR = 'SET_SHIFTS_ERROR';
export const SET_SELECTED_SHIFT = 'SET_SELECTED_SHIFT';

export const fetchShifts = () => ({
    type: FETCH_SHIFTS,
});

export const setShiftsLoading = (loading = true) => ({
    type: SET_SHIFTS_LOADING,
    loading
});

export const setSelectedShift = (shift) => ({
    type: SET_SELECTED_SHIFT,
    shift
});
