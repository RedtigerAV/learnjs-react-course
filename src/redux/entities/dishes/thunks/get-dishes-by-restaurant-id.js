import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectDishesProcessedRestaurantIds } from '../selectors';

export const getDishesByRestaurantId = createAsyncThunk(
    'dishes/getDishesByRestaurantId',
    async (restaurantId) => await fetch(`/api/dishes?restaurantId=${restaurantId}`).then(res => res.json()),
    { condition: (restaurantId, { getState }) => selectDishesProcessedRestaurantIds(getState()).includes(restaurantId) === false}
)