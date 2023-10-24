const selectRequestsModule = (state) => state.requests;

export const selectRequestStatusById = (state, requestId) => selectRequestsModule(state)[requestId]?.status;