import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/selectors';
import { Review } from './component';

export const ReviewContainer = ({ reviewId, ...props }) => {
    const review = useSelector(state => selectReviewById(state, reviewId));

    return <Review review={review} {...props} />;
};
