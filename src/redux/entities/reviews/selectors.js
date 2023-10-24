import { reviewsEntityAdapter } from './entitiy-adapter';

const selectReviewsModule = (state) => state.reviews;

export const { selectIds: selectReviewIds, selectById: selectReviewById } = reviewsEntityAdapter.getSelectors(selectReviewsModule);