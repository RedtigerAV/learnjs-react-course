import { ReviewForm } from './component';
import { useEffect } from 'react';
import { REQUEST_STATUS } from '../../constants/request-status';
import { useCreateReviewMutation } from '../../redux/services/review-api';

// Using mock userId from mock.js because we don't have authorization yet and we don't create users on server
const MOCK_USER_ID = 'a304959a-76c0-4b34-954a-b38dbf310360';

export const ReviewFormContainer = ({ restaurantId }) => {
    const [createReview, { isLoading, isSuccess, isError }] = useCreateReviewMutation();
    const submissionStatus = isLoading
        ? REQUEST_STATUS.pending
        : isSuccess
            ? REQUEST_STATUS.fulfilled
            : REQUEST_STATUS.idle;

    useEffect(() => {
        if (isSuccess) {
            alert('Review has been submitted');
        } else if (isError) {
            alert('Something went wrong. Please try again later');
        }
    }, [isSuccess, isError])

    return <ReviewForm submissionStatus={submissionStatus} onSubmit={(form) => createReview({
        restaurantId,
        newReview: {
            ...form,
            userId: MOCK_USER_ID
        }
    })} />;
};
