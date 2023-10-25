import { Restaurant } from './component';
import { useGetRestaurantsQuery } from '../../redux/services/restaurant-api';

export const RestaurantContainer = ({ restaurantId, ...props }) => {
    const { restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            restaurant: result.data?.find((restaurant) => restaurant.id === restaurantId)
        })
    });

    return <Restaurant restaurant={restaurant} {...props} />;
};
