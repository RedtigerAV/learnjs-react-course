import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectUserIds } from '../selectors';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => await fetch(`/api/users`).then(res => res.json()),
    { condition: (_, { getState }) => selectUserIds(getState()).length === 0 }
)