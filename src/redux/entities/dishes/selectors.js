import { dishesEntityAdapter } from './entity-adapter';

const selectDishesModule = state => state.dishes;

export const {
    selectIds: selectDishIds,
    selectById: selectDishById,
    selectEntities: selectDishesEntities
} = dishesEntityAdapter.getSelectors(selectDishesModule);