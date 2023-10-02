import { useState } from 'react';
import { restaurants } from './../../constants/mock';
import { Restaurant } from '../../components/Restaurant/component';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';

export const Restaurants = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <div>
            <RestaurantTabs restaurants={restaurants} onSelectRestaurant={setActiveRestaurantIndex} />

            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </div>
    );
}