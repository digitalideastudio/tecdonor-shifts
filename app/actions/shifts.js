export const FETCH_SHIFTS = 'FETCH_SHIFTS';
export const SET_SHIFTS_LOADING = 'SET_SHIFTS_LOADING';
export const SET_SHIFTS = 'SET_SHIFTS';

export const fetchShifts = () => ({
    type: FETCH_SHIFTS,
});

export const setShiftsLoading = (loading = true) => ({
    type: SET_SHIFTS_LOADING,
    loading
});