import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectUsersLoadingStatus } from '../selectors';
import { REQUEST_STATUS } from '../../../../constants/request-status';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => await fetch(`/api/users`).then(res => res.json()),
    { condition: (_, { getState }) => {
        const status = selectUsersLoadingStatus(getState());

        return status !== REQUEST_STATUS.pending && status !== REQUEST_STATUS.fulfilled;
    } }
)