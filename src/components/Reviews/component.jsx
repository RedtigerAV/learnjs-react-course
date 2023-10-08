import classNames from 'classnames';
import styles from './styles.module.scss';
import { Review } from '../Review/component';
import { Card } from '../Card/component';

export const Reviews = ({ reviews, className }) => {
    return (
        <div className={classNames(className)}>
            {reviews.map(review => (
                <Card className={classNames(styles.reivew_card)} key={review.id}>
                    <Review review={review} />
                </Card>
            ))}
        </div>
    )
}