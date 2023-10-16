import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/selectors';
import { Button } from '../Button/component';

export const RestaurantTab = ({ restaurantId, selected, onSelect }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    return (
        <Button
            title={restaurant.name}
            appearance={selected ? 'flat' : 'basic'}
            color="primary"
            onClick={() => onSelect(restaurant.id)}
        />
    )
};
