import classNames from 'classnames';
import styles from './styles.module.scss';
import { UserContainer } from '../User/container';

export const Review = ({ review, className }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.header)}>
                <UserContainer userId={review.userId} />
                <span className={classNames(styles.headerRating)}>{review.rating} / 5</span>
            </div>

            <span className={classNames(styles.review)}>{review.text}</span>
        </div>
    )
}