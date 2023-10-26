import { createSlice } from '@reduxjs/toolkit';
import { dishesEntityAdapter } from './entity-adapter';
import { getDishesByRestaurantId } from './thunks/get-dishes-by-restaurant-id';

export const { reducer } = createSlice({
    name: 'dishes',
    initialState: dishesEntityAdapter.getInitialState(),
    extraReducers: (builder) => builder
        .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
            dishesEntityAdapter.setMany(state, payload);
        })
})

export default reducer;