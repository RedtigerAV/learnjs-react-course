const selectReviewsModule = (state) => state.reviews;

export const selectReviewById = (state, id) => selectReviewsModule(state).entities[id];