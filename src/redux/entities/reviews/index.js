import { createSlice } from '@reduxjs/toolkit';
import { reviewsEntityAdapter } from './entitiy-adapter';
import { REQUEST_STATUS } from '../../../constants/request-status';
import { getReviewsByRestaurantId } from './thunks/get-reviews-by-restaurant-id';

export const { reducer } = createSlice({
    name: 'reviews',
    initialState: reviewsEntityAdapter.getInitialState({
        status: REQUEST_STATUS.idle,
        processedRestaurantIds: []
    }),
    extraReducers: (builder) => builder
        .addCase(getReviewsByRestaurantId.pending, (state, { meta }) => {
            state.status = REQUEST_STATUS.pending;
            state.processedRestaurantIds.push(meta.arg);
        })
        .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
            reviewsEntityAdapter.setMany(state, payload);
            state.status = REQUEST_STATUS.fulfilled;
        })
        .addCase(getReviewsByRestaurantId.rejected, (state, { meta }) => {
            state.status = REQUEST_STATUS.rejected;
            state.processedRestaurantIds.splice(state.processedRestaurantIds.indexOf(meta.arg), 1);
        })
})

export default reducer;