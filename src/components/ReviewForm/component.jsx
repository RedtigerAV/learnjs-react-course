import { useReducer } from 'react'
import { Button } from '../Button/component';

const DEFAULT_FORM_VALUE = {
    userName: '',
    review: '',
    rating: 1
}

const MIN_RATING = 1;
const MAX_RATING = 5;

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'setUserName':
            return { ...state, userName: action.payload };
        case 'setReview':
            return { ...state, review: action.payload };
        case 'setRating': {
            const isNaN = Number.isNaN(+action.payload);
            const notInteger = !Number.isInteger(+action.payload);
            const lessThanMinValue = +action.payload < MIN_RATING;
            const moreThanMaxValue = +action.payload > MAX_RATING;

            if (isNaN || notInteger) {
                alert('The rating must be an integer');

                return { ...state };
            }

            if (lessThanMinValue || moreThanMaxValue) {
                alert(`The rating value can be from ${MIN_RATING} to ${MAX_RATING}`);

                return { ...state };
            }

            return { ...state, rating: +action.payload };
        }
        case 'submit':
            alert('Review has been submitted');

            return { ...DEFAULT_FORM_VALUE };
        default:
            return state;
    }
}

export const ReviewForm = () => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const isFormValid = () => formValue.userName && formValue.rating && formValue.review;

    return (
        <form>
            <div>
                <label>Your name</label>
                <input
                    required
                    placeholder="Enter your name"
                    value={formValue.userName}
                    onChange={(event) => dispatch({ type: 'setUserName', payload: event.target.value })}
                />
            </div>
            <div>
                <label>Review</label>
                <textarea
                    required
                    rows="5"
                    placeholder="Leave a review"
                    value={formValue.review}
                    onChange={(event) => dispatch({ type: 'setReview', payload: event.target.value })}
                />
            </div>
            <div>
                <label>Rating</label>
                <input
                    required
                    placeholder="Set a rating"
                    type="number"
                    min={MIN_RATING}
                    max={MAX_RATING}
                    value={formValue.rating}
                    onChange={(event) => dispatch({ type: 'setRating', payload: event.target.value })}
                />
            </div>

            <Button appearance="flat" color="primary" title="Submit" disabled={!isFormValid()} onClick={() => dispatch({ type: 'submit' })} />
        </form>
    )
}