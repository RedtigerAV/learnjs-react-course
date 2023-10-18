import { reviewsEntityAdapter } from './entitiy-adapter';

const selectReviewsModule = (state) => state.reviews;

export const selectReviewsLoadingStatus = (state) => selectReviewsModule(state).status;

export const selectReviewsProcessedRestaurantIds = (state) => selectReviewsModule(state).processedRestaurantIds;

export const { selectById: selectReviewById } = reviewsEntityAdapter.getSelectors(selectReviewsModule);