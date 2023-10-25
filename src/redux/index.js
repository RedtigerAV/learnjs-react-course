import { configureStore } from '@reduxjs/toolkit';
import cart from './ui/cart';
import { loggerMiddleware } from './middlewares/logger';
import { api } from './services/api';

export const store = configureStore({
    reducer: {
        cart,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(api.middleware, loggerMiddleware),
});