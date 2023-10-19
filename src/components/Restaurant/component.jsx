import classNames from 'classnames';
import { Menu } from '../Menu/component';
import { ReviewForm } from '../ReviewForm/component';
import styles from './styles.module.scss';
import { ReviewsContainer } from '../Reviews/container';

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={classNames(styles.root)}>
            <h1>{restaurant.name}</h1>
            <h2>Menu</h2>
            <Menu className={classNames(styles.menu)} dishIds={restaurant.menu} />
            <h2>Reviews</h2>
            <ReviewsContainer className={classNames(styles.reviews)} reviewIds={restaurant.reviews} />
            <h2>Leave a review</h2>
            <ReviewForm />
        </div>
    )
}