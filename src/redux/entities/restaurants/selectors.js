const selectRestaurantsModule = state => state.restaurants;

export const selectRestaurantById = (state, id) => selectRestaurantsModule(state).entities[id];