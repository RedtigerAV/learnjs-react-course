import { createSlice } from '@reduxjs/toolkit';
import { usersEntityAdapter } from './entity-adapter';
import { REQUEST_STATUS } from '../../../constants/request-status';
import { getUsers } from './thunks/get-users';

export const { reducer } = createSlice({
    name: 'users',
    initialState: usersEntityAdapter.getInitialState({
        status: REQUEST_STATUS.idle
    }),
    extraReducers: (builder) => builder
        .addCase(getUsers.pending, (state) => {
            state.status = REQUEST_STATUS.pending;
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            usersEntityAdapter.setAll(state, action.payload);
            state.status = REQUEST_STATUS.fulfilled;
        })
        .addCase(getUsers.rejected, (state) => {
            state.status = REQUEST_STATUS.rejected;
        })
});

export default reducer;