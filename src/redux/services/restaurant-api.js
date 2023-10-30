import { api } from './api';

const restautantApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => 'restaurants',
            providesTags: ['Restaurant'],
        })
    }),
});

export const { useGetRestaurantsQuery } = restautantApi;