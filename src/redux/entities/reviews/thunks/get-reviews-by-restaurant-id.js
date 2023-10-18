import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectReviewsProcessedRestaurantIds } from '../selectors';


export const getReviewsByRestaurantId = createAsyncThunk(
    'reviews/getReviewsByRestaurantId',
    async (restaurantId) => await fetch(`/api/reviews?restaurantId=${restaurantId}`).then(res => res.json()),
    { condition: (restaurantId, { getState }) => selectReviewsProcessedRestaurantIds(getState()).includes(restaurantId) === false}
)