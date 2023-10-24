import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantMenu } from '../../restaurants/selectors';
import { selectDishIds } from '../selectors';

export const getDishesByRestaurantId = createAsyncThunk(
    'dishes/getDishesByRestaurantId',
    async (restaurantId) => await fetch(`/api/dishes?restaurantId=${restaurantId}`).then(res => res.json()),
    {
        condition: (restaurantId, { getState }) => {
            const state = getState();
            const restaurantMenu = selectRestaurantMenu(state, restaurantId);
            const dishIds = selectDishIds(state);

            return !restaurantMenu.every(dishId => dishIds.includes(dishId));
        }
    }
)