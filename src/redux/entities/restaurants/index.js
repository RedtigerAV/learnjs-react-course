import { createSlice } from '@reduxjs/toolkit';
import { restaurantsEntityAdapter } from './entity-adapter';
import { getRestaurants } from './thunks/get-restaurants';

export const { reducer } = createSlice({
    name: 'restaurants',
    initialState: restaurantsEntityAdapter.getInitialState(),
    extraReducers: (builder) => builder
        .addCase(getRestaurants.fulfilled, (state, action) => {
            restaurantsEntityAdapter.setAll(state, action.payload);
        })
})

export default reducer;