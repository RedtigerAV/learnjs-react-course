import { createSlice } from '@reduxjs/toolkit';
import { usersEntityAdapter } from './entity-adapter';
import { getUsers } from './thunks/get-users';

export const { reducer } = createSlice({
    name: 'users',
    initialState: usersEntityAdapter.getInitialState(),
    extraReducers: (builder) => builder
        .addCase(getUsers.fulfilled, (state, action) => {
            usersEntityAdapter.setAll(state, action.payload);
        })
});

export default reducer;