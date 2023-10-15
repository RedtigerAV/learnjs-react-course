import classNames from 'classnames';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/reviews/selectors';
import { selectUserById } from '../../redux/entities/users/selectors';

export const Review = ({ reviewId, className }) => {
    const review = useSelector(state => selectReviewById(state, reviewId));
    const user = useSelector(state => selectUserById(state, review.userId));

    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.header)}>
                <span className={classNames(styles.headerName)}>{user.name}</span>
                <span className={classNames(styles.headerRating)}>{review.rating} / 5</span>
            </div>

            <span className={classNames(styles.review)}>{review.text}</span>
        </div>
    )
}