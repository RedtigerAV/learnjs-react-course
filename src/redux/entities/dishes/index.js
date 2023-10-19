import { createSlice } from '@reduxjs/toolkit';
import { dishesEntityAdapter } from './entity-adapter';
import { REQUEST_STATUS } from '../../../constants/request-status';
import { getDishesByRestaurantId } from './thunks/get-dishes-by-restaurant-id';

export const { reducer } = createSlice({
    name: 'dishes',
    initialState: dishesEntityAdapter.getInitialState({
        status: REQUEST_STATUS.idle,
        processedRestaurantIds: []
    }),
    extraReducers: (builder) => builder
        .addCase(getDishesByRestaurantId.pending, (state, { meta }) => {
            state.status = REQUEST_STATUS.pending;
            state.processedRestaurantIds.push(meta.arg);
        })
        .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
            dishesEntityAdapter.setMany(state, payload);
            state.status = REQUEST_STATUS.fulfilled;
        })
        .addCase(getDishesByRestaurantId.rejected, (state, { meta }) => {
            state.status = REQUEST_STATUS.rejected;
            state.processedRestaurantIds.splice(state.processedRestaurantIds.indexOf(meta.arg), 1);
        })
})

export default reducer;