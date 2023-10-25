import { useGetRestaurantsQuery } from '../../redux/services/restaurant-api';
import { RestaurantTab } from './component';

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
    const { restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            restaurant: result.data?.find((restaurant) => restaurant.id === restaurantId)
        })
    });

    return <RestaurantTab restaurantId={restaurantId} name={restaurant.name} {...props} />
};
