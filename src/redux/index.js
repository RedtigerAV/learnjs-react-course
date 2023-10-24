import { configureStore } from '@reduxjs/toolkit';
import restaurants from './entities/restaurants';
import dishes from './entities/dishes';
import reviews from './entities/reviews';
import users from './entities/users';
import requests from './ui/requests';
import { loggerMiddleware } from './middlewares/logger';

export const store = configureStore({
    reducer: {
        restaurants,
        dishes,
        reviews,
        users,
        requests
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(loggerMiddleware)
});