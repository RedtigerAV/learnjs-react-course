import { useSelector } from 'react-redux';
import { Dish } from './component';
import { selectDishById } from '../../redux/entities/dishes/selectors';

export const DishContainer = ({ dishId, ...props }) => {
    const dish = useSelector(state => selectDishById(state, dishId));

    return <Dish dish={dish} {...props} />;
};
