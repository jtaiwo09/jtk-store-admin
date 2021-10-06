import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'cUser',
    initialState: { 
        users: [],
        isError: false,
        loading: false,
    },
    reducers: {
        getUserStart: (state)=> {
            state.loading = true;
        },
        getUserSuccess: (state, action)=> {
            state.loading = false;
            state.isError = false
            state.users = action.payload;
        },
        getUserFailure: (state, action)=> {
            state.isError = true;
            state.error = action.payload;
        },
        deleteUserStart: (state)=> {
            state.loading = true;
        },
        deleteUserSuccess: (state, action)=> {
            state.loading = false;
            state.isError = false;
            // state.users = state.users.splice(state.users.findIndex(user=> user._id === action.payload, 1))
            state.users = state.users.filter(user=> user._id !== action.payload);
        },
        deleteUserFailure: (state)=> {
            state.loading = false;
            state.isError = true;
        },
    }
});

export const { fetchingStart, fetchingSuccess, fetchingFailure, getUserStart, getUserSuccess, getUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure } = userSlice.actions;
export default userSlice.reducer;