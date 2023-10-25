import { Restaurant } from './component';
import { useGetRestaurantsQuery } from '../../redux/services/restaurant-api';
import { useParams } from 'react-router-dom';

export const RestaurantContainer = ({ ...props }) => {
    const { restaurantId } = useParams();
    const { restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            restaurant: result.data?.find((restaurant) => restaurant.id === restaurantId)
        })
    });

    if (!restaurant) {
        return null;
    }

    return <Restaurant restaurant={restaurant} {...props} />;
};
