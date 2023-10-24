import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectReviewIds } from '../selectors';
import { selectRestaurantReviews } from '../../restaurants/selectors';


export const getReviewsByRestaurantId = createAsyncThunk(
    'reviews/getReviewsByRestaurantId',
    async (restaurantId) => await fetch(`/api/reviews?restaurantId=${restaurantId}`).then(res => res.json()),
    {
        condition: (restaurantId, { getState }) => {
            const state = getState();
            const restaurantReviews = selectRestaurantReviews(state, restaurantId);
            const reviewIds = selectReviewIds(state);

            return !restaurantReviews.every(dishId => reviewIds.includes(dishId));
        }
    }
)