import classNames from 'classnames';
import styles from './styles.module.scss';
import { Card } from '../Card/component';
import { Review } from '../Review/component';

export const Reviews = ({ reviews, className }) => {
    return (
        <div className={classNames(className)}>
            {reviews.map(review => (
                <Card className={classNames(styles.reviewCard)} key={review.id}>
                    <Review review={review} />
                </Card>
            ))}
        </div>
    )
}