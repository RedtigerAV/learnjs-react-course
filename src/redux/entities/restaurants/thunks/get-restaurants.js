import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantIds } from '../selectors';

export const getRestaurants = createAsyncThunk(
    'restaurants/getRestaurants',
    async () => await fetch('/api/restaurants/').then(res => res.json()),
    { condition: (_, { getState }) => selectRestaurantIds(getState()).length === 0 }
)