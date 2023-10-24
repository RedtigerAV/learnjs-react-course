import { configureStore } from '@reduxjs/toolkit';
import restaurants from './entities/restaurants';
import dishes from './entities/dishes';
import reviews from './entities/reviews';
import users from './entities/users';
import requests from './ui/requests';
import cart from './ui/cart';
import { loggerMiddleware } from './middlewares/logger';

export const store = configureStore({
    reducer: {
        restaurants,
        dishes,
        reviews,
        users,
        requests,
        cart
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(loggerMiddleware)
});