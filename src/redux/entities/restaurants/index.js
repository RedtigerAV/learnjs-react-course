import { createSlice } from '@reduxjs/toolkit';
import { restaurantsEntityAdapter } from './entity-adapter';
import { REQUEST_STATUS } from '../../../constants/request-status';
import { getRestaurants } from './thunks/get-restaurants';

export const { reducer } = createSlice({
    name: 'restaurants',
    initialState: restaurantsEntityAdapter.getInitialState({
        status: REQUEST_STATUS.idle
    }),
    extraReducers: (builder) => builder
        .addCase(getRestaurants.pending, (state) => {
            state.status = REQUEST_STATUS.pending
        })
        .addCase(getRestaurants.fulfilled, (state, action) => {
            restaurantsEntityAdapter.setAll(state, action.payload);
            state.status = REQUEST_STATUS.fulfilled;
        })
        .addCase(getRestaurants.rejected, (state) => {
            state.status = REQUEST_STATUS.rejected
        })
})

export default reducer;