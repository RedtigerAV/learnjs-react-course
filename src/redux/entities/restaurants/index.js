import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constants/normalized-mock';

const initialState = {
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;

        return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
}

export const { reducer } = createSlice({
    name: 'restaurants',
    initialState,
})

export default reducer;