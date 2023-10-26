import { ReviewForm } from './component';
import { useMakeRequest } from '../../hooks/use-make-request';
import { postReview } from '../../redux/entities/reviews/thunks/post-review';
import { useEffect } from 'react';
import { REQUEST_STATUS } from '../../constants/request-status';

// Using mock userId from mock.js because we don't have authorization yet and we don't create users on server
const MOCK_USER_ID = 'a304959a-76c0-4b34-954a-b38dbf310360';

export const ReviewFormContainer = ({ restaurantId }) => {
    const [submissionStatus, createReview] = useMakeRequest(postReview);

    useEffect(() => {
        if (submissionStatus === REQUEST_STATUS.fulfilled) {
            alert('Review has been submitted');
        } else if (submissionStatus === REQUEST_STATUS.rejected) {
            alert('Something went wrong. Please try again later');
        }
    }, [submissionStatus])

    return <ReviewForm submissionStatus={submissionStatus} onSubmit={(form) => createReview({
        restaurantId,
        newReview: {
            ...form,
            userId: MOCK_USER_ID
        }
    })} />;
};
