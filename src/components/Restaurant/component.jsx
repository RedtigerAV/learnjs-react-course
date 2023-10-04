import { Menu } from '../Menu/component';
import { ReviewForm } from '../ReviewForm/component';
import { Reviews } from '../Reviews/component';

export const Restaurant = ({ restaurant }) => {
    return (
        <>
            <h2>{restaurant.name}</h2>
            <h3>Menu</h3>
            <Menu menu={restaurant.menu} />
            <h3>Reviews</h3>
            <Reviews reviews={restaurant.reviews} />
            <h3>Leave a review</h3>
            <ReviewForm />
        </>
    )
}