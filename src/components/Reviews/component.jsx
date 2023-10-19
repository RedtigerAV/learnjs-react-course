import classNames from 'classnames';
import styles from './styles.module.scss';
import { Card } from '../Card/component';
import { ReviewContainer } from '../Review/container';

export const Reviews = ({ reviewIds, className }) => {
    return (
        <div className={classNames(className)}>
            {reviewIds.map(reviewId => (
                <Card className={classNames(styles.reviewCard)} key={reviewId}>
                    <ReviewContainer reviewId={reviewId} />
                </Card>
            ))}
        </div>
    )
}