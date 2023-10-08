import classNames from 'classnames';
import { Menu } from '../Menu/component';
import { ReviewForm } from '../ReviewForm/component';
import { Reviews } from '../Reviews/component';
import styles from './styles.module.scss';

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={classNames(styles.root)}>
            <h1>{restaurant.name}</h1>
            <h2>Menu</h2>
            <Menu menu={restaurant.menu} />
            <h2>Reviews</h2>
            <Reviews reviews={restaurant.reviews} />
            <h2>Leave a review</h2>
            <ReviewForm />
        </div>
    )
}