import { useGetRestaurantsQuery } from '../../redux/services/restaurant-api';
import { RestaurantTabs } from './component';


export const RestaurantTabsContainer = (props) => {
    const { restaurantIds } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            restaurantIds: result.data?.map((restaurant) => restaurant.id)
        })
    });

    return <RestaurantTabs {...props} restaurantIds={restaurantIds} />;
};
