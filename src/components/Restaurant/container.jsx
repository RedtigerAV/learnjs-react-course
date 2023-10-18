import { useSelector } from 'react-redux';
import { Restaurant } from './component';
import { selectRestaurantById } from '../../redux/entities/restaurants/selectors';

export const RestaurantContainer = ({ restaurantId, ...props }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    return <Restaurant restaurant={restaurant} {...props} />;
};
