import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectRestaurantsLoadingStatus } from '../selectors';
import { REQUEST_STATUS } from '../../../../constants/request-status';

export const getRestaurants = createAsyncThunk(
    'restaurants/getRestaurants',
    async () => await fetch('/api/restaurants/').then(res => res.json()),
    { condition: (_, { getState }) => selectRestaurantsLoadingStatus(getState()) !== REQUEST_STATUS.pending }
)