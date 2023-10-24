import { restaurantsEntityAdapter } from './entity-adapter';

const selectRestaurantsModule = state => state.restaurants;

export const {
    selectIds: selectRestaurantIds,
    selectById: selectRestaurantById
} = restaurantsEntityAdapter.getSelectors(selectRestaurantsModule);

export const selectRestaurantMenu = (state, restaurantId) => selectRestaurantById(state, restaurantId)?.menu || [];

export const selectRestaurantReviews = (state, restaurantId) => selectRestaurantById(state, restaurantId)?.reviews || [];