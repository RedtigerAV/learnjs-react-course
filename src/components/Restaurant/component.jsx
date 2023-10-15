import classNames from 'classnames';
import { Menu } from '../Menu/component';
import { ReviewForm } from '../ReviewForm/component';
import { Reviews } from '../Reviews/component';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/selectors';

export const Restaurant = ({ restaurantId }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    return (
        <div className={classNames(styles.root)}>
            <h1>{restaurant.name}</h1>
            <h2>Menu</h2>
            <Menu className={classNames(styles.menu)} dishIds={restaurant.menu} />
            <h2>Reviews</h2>
            <Reviews className={classNames(styles.reviews)} reviewIds={restaurant.reviews} />
            <h2>Leave a review</h2>
            <ReviewForm />
        </div>
    )
}