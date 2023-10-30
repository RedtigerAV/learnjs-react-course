import { Reviews } from './component';
import { useGetReviewsQuery } from '../../redux/services/review-api';

export const ReviewsContainer = ({ restaurantId, ...props }) => {
    const { data: reviews, isFetching, isError } = useGetReviewsQuery(restaurantId);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong. Please refresh the page</div>;
    }


    return <Reviews reviews={reviews} {...props} />;
};
