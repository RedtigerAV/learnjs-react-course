import { createAsyncThunk } from '@reduxjs/toolkit';
import { restaurantActions } from '../../restaurants';

export const postReview = createAsyncThunk(
    'reviews/postReview',
    async ({ restaurantId, newReview }, { dispatch }) => {
        const response = await fetch(`/api/review/${restaurantId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newReview)
        });
        const review = await response.json();

        dispatch(restaurantActions.addReview({ restaurantId, reviewId: review.id }));

        return review;
    }
)