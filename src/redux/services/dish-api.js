import { api } from './api';

const dishApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDishes: builder.query({
            query: (restaurantId) => ({ url: 'dishes', params: { restaurantId } }),
            providesTags: ['Dish'],
        })
    }),
});

export const { useGetDishesQuery } = dishApi;