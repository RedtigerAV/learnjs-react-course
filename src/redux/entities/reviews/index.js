import { createSlice } from '@reduxjs/toolkit';
import { reviewsEntityAdapter } from './entitiy-adapter';
import { getReviewsByRestaurantId } from './thunks/get-reviews-by-restaurant-id';

export const { reducer } = createSlice({
    name: 'reviews',
    initialState: reviewsEntityAdapter.getInitialState(),
    extraReducers: (builder) => builder
        .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
            reviewsEntityAdapter.setMany(state, payload);
        })
})

export default reducer;