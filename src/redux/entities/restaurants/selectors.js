const selectRestaurantsModule = state => state.restaurants;

export const selectRestaurantIds = state => selectRestaurantsModule(state).ids;

export const selectRestaurantById = (state, id) => selectRestaurantsModule(state).entities[id];