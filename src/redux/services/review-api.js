import { api } from './api';

export const reviewsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getReviews: builder.query({
            query: (restaurantId) => ({ url: 'reviews', params: { restaurantId } }),
            providesTags: (result, _, restaurantId) =>
                (result || [])
                    .map(({ id }) => ({ type: 'Review', id }))
                    .concat({ type: 'Review', id: restaurantId }, { type: 'Review', id: 'LIST' })
        }),
        createReview: builder.mutation({
            query: ({ restaurantId, newReview }) =>
                ({ url: `review/${restaurantId}`, method: 'POST', body: newReview }),
            invalidatesTags: (result, _, { restaurantId }) => [{ type: 'Review', id: restaurantId }]
        })
    })
});

export const { useGetReviewsQuery, useCreateReviewMutation } = reviewsApi;