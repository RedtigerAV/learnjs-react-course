import { useDispatch, useSelector } from 'react-redux';
import { DishCounter } from './component';
import { cartActions } from '../../redux/ui/cart';
import { selectDishQuantityById } from '../../redux/ui/cart/selectors';

export const DishCounterContainer = ({ dish, ...props }) => {
    const dispatch = useDispatch();
    const quantity = useSelector(state => selectDishQuantityById(state, dish.id));

    return <DishCounter
        dish={dish}
        quantity={quantity}
        onSetQuantity={quantity => dispatch(cartActions.setQuantity({ dishId: dish.id, quantity }))}
        {...props} />;
};
