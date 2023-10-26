import { createSlice } from '@reduxjs/toolkit';
import { restaurantsEntityAdapter } from './entity-adapter';
import { getRestaurants } from './thunks/get-restaurants';

export const { reducer, actions: restaurantActions } = createSlice({
    name: 'restaurants',
    initialState: restaurantsEntityAdapter.getInitialState(),
    reducers: {
        addReview: (state, { payload }) => {
            restaurantsEntityAdapter.updateOne(state, {
                id: payload.restaurantId,
                changes: {
                    reviews: [
                        ...state.entities[payload.restaurantId].reviews,
                        payload.reviewId
                    ]
                }
            });
        }
    },
    extraReducers: (builder) => builder
        .addCase(getRestaurants.fulfilled, (state, action) => {
            restaurantsEntityAdapter.setAll(state, action.payload);
        })
})

export default reducer;