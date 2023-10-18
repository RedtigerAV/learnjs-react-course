import { useDispatch, useSelector } from 'react-redux';
import { Restaurant } from './component';
import { selectRestaurantById } from '../../redux/entities/restaurants/selectors';
import { useEffect } from 'react';
import { getDishesByRestaurantId } from '../../redux/entities/dishes/thunks/get-dishes-by-restaurant-id';

export const RestaurantContainer = ({ restaurantId, ...props }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishesByRestaurantId(restaurantId));
    }, [restaurantId])

    // TODO: load reviews by restaurantId

    return <Restaurant restaurant={restaurant} {...props} />;
};
