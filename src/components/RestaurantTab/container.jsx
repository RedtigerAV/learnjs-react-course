import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/selectors';
import { RestaurantTab } from './component';

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    return <RestaurantTab name={restaurant.name} {...props} />
};
