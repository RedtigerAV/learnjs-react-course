import { dishesEntityAdapter } from './entity-adapter';

const selectDishesModule = state => state.dishes;

export const selectDishesLoadingStatus = state => selectDishesModule(state).status;

export const selectDishesProcessedRestaurantIds = state => selectDishesModule(state).processedRestaurantIds;

export const { selectById: selectDishById } = dishesEntityAdapter.getSelectors(selectDishesModule);