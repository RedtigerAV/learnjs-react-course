import { useDispatch, useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/selectors';
import { Review } from './component';
import { useEffect } from 'react';
import { getUsers } from '../../redux/entities/users/thunks/get-users';

export const ReviewContainer = ({ reviewId, ...props }) => {
    const review = useSelector(state => selectReviewById(state, reviewId));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return <Review review={review} {...props} />;
};
