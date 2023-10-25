import styles from './styles.module.scss';
import { MenuContainer } from '../Menu/container';
import { ReviewsContainer } from '../Reviews/container';
import { ReviewFormContainer } from '../ReviewForm/container';

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.root}>
            <h1>{restaurant.name}</h1>
            <h2>Menu</h2>
            <MenuContainer restaurantId={restaurant.id} className={styles.menu} />
            <h2>Reviews</h2>
            <ReviewsContainer restaurantId={restaurant.id} className={styles.reviews} />
            <h2>Leave a review</h2>
            <ReviewFormContainer restaurantId={restaurant.id} />
        </div>
    )
}