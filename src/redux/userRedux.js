import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { 
        currentUser: null,
        isError: false,
        loading: false,
        error: ''
    },
    reducers: {
        fetchingStart: (state)=> {
            state.loading = true;
        },
        fetchingSuccess: (state, action)=> {
            state.loading = false;
            state.isError = false
            state.currentUser = action.payload;
        },
        fetchingFailure: (state, action)=> {
            state.isError = true;
            state.error = action.payload;
        },
    }
});

export const { fetchingStart, fetchingSuccess, fetchingFailure } = userSlice.actions;
export default userSlice.reducer;