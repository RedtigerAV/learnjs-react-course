import { selectDishesEntities } from '../../entities/dishes/selectors';

export const selectCartModule = state => state.cart;

export const selectDishQuantityById = (state, dishId) => selectCartModule(state)[dishId] || 0;

export const selectCartTotal = state => {
    const dishes = selectDishesEntities(state);
    const cart = selectCartModule(state);

    return Object.entries(cart).reduce((total, [dishId, quantity]) => {
        const price = dishes[dishId].price;

        return total + price * quantity;
    }, 0);
}