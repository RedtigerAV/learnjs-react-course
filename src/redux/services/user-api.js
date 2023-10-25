import { api } from './api';

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users'
        })
    }),
});

export const { useGetUsersQuery } = userApi;