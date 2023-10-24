import { useSelector } from 'react-redux';
import { Restaurant } from './component';
import { selectRestaurantById } from '../../redux/entities/restaurants/selectors';
import { getDishesByRestaurantId } from '../../redux/entities/dishes/thunks/get-dishes-by-restaurant-id';
import { getReviewsByRestaurantId } from '../../redux/entities/reviews/thunks/get-reviews-by-restaurant-id';
import { useRequest } from '../../hooks/use-request';

export const RestaurantContainer = ({ restaurantId, ...props }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    useRequest(getDishesByRestaurantId, restaurantId);
    useRequest(getReviewsByRestaurantId, restaurantId);

    return <Restaurant restaurant={restaurant} {...props} />;
};
