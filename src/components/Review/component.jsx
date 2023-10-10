import classNames from 'classnames';
import styles from './styles.module.scss';

export const Review = ({ review, className }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.header)}>
                <span className={classNames(styles.header_name)}>{review.user}</span>
                <span className={classNames(styles.header_rating)}>{review.rating} / 5</span>
            </div>

            <span className={classNames(styles.review)}>{review.text}</span>
        </div>
    )
}