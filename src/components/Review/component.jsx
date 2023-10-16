import classNames from 'classnames';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/selectors';
import { User } from '../User/component';

export const Review = ({ reviewId, className }) => {
    const review = useSelector(state => selectReviewById(state, reviewId));

    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.header)}>
                <User userId={review.userId} />
                <span className={classNames(styles.headerRating)}>{review.rating} / 5</span>
            </div>

            <span className={classNames(styles.review)}>{review.text}</span>
        </div>
    )
}