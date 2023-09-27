import { useState } from 'react';
import { restaurants } from './../../constants/mock';
import { Restaurant } from '../../components/Restaurant/component';

export const Restaurants = () => {
    const [ activeRestaurantId, setActiveRestaurantId ] = useState(restaurants?.[0]?.id);
    const getRestaurantById = (id) => (restaurants.find(({ id: restaurantId }) => restaurantId === id));

    return (
        <>
            <nav>{restaurants.map(restaurant => <button key={restaurant.id} onClick={() => setActiveRestaurantId(restaurant.id)}>{restaurant.name}</button>)}</nav>

            <Restaurant restaurant={getRestaurantById(activeRestaurantId)} />
        </>
    );
}