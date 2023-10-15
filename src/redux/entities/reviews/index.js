import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../constants/normalized-mock';

const initialState = {
    entities: normalizedReviews.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;

        return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
}

export const { reducer } = createSlice({
    name: 'reviews',
    initialState,
})

export default reducer;