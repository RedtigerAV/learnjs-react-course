import { useDispatch, useSelector } from 'react-redux';
import { Restaurant } from './component';
import { selectRestaurantById } from '../../redux/entities/restaurants/selectors';
import { useEffect } from 'react';
import { getDishesByRestaurantId } from '../../redux/entities/dishes/thunks/get-dishes-by-restaurant-id';
import { getReviewsByRestaurantId } from '../../redux/entities/reviews/thunks/get-reviews-by-restaurant-id';

export const RestaurantContainer = ({ restaurantId, ...props }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishesByRestaurantId(restaurantId));
        dispatch(getReviewsByRestaurantId(restaurantId));
    }, [restaurantId])

    return <Restaurant restaurant={restaurant} {...props} />;
};
