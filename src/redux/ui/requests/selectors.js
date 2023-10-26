import { REQUEST_STATUS } from '../../../constants/request-status';

const selectRequestsModule = (state) => state.requests;

export const selectRequestStatusById = (state, requestId) => selectRequestsModule(state)[requestId]?.status || REQUEST_STATUS.idle;