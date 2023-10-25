import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Restaurant', 'Dish', 'Review'],
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: () => ({})
});