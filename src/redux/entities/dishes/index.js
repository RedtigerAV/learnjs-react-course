import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constants/normalized-mock';

const initialState = {
    entities: normalizedDishes.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;

        return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
}

export const { reducer } = createSlice({
    name: 'dishes',
    initialState,
})

export default reducer;