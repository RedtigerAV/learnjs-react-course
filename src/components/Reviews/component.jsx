import classNames from 'classnames';
import styles from './styles.module.scss';
import { Review } from '../Review/component';
import { Card } from '../Card/component';

export const Reviews = ({ reviewIds, className }) => {
    return (
        <div className={classNames(className)}>
            {reviewIds.map(reviewId => (
                <Card className={classNames(styles.reviewCard)} key={reviewId}>
                    <Review reviewId={reviewId} />
                </Card>
            ))}
        </div>
    )
}