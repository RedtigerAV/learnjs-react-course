import { restaurantsEntityAdapter } from './entity-adapter';

const selectRestaurantsModule = state => state.restaurants;

export const selectRestaurantsLoadingStatus = state => selectRestaurantsModule(state).status;

export const {
    selectIds: selectRestaurantIds,
    selectById: selectRestaurantById
} = restaurantsEntityAdapter.getSelectors(selectRestaurantsModule);