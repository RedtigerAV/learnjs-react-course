import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../../constants/request-status';

export const { reducer } = createSlice({
    name: 'ui/requests',
    initialState: {},
    extraReducers: (builder) => builder
        .addMatcher(
            (action) => action.type.endsWith(`/${REQUEST_STATUS.pending}`),
            (state, { meta }) => {
                state[meta.requestId] = {
                    status: REQUEST_STATUS.pending
                };
            }
        )
        .addMatcher(
            (action) => action.type.endsWith(`/${REQUEST_STATUS.fulfilled}`),
            (state, { meta }) => {
                state[meta.requestId] = {
                    status: REQUEST_STATUS.fulfilled
                };
            }
        )
        .addMatcher(
            (action) => action.type.endsWith(`/${REQUEST_STATUS.rejected}`),
            (state, { meta, error }) => {
                state[meta.requestId] = {
                    status: REQUEST_STATUS.rejected,
                    error
                };
            }
        )
});

export default reducer;