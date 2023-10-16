const selectDishesModule = state => state.dishes;

export const selectDishById = (state, id) => selectDishesModule(state).entities[id];