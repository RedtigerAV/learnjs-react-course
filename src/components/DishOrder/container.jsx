import { useSelector } from 'react-redux';
import { DishOrder } from './component';
import { selectDishById } from '../../redux/entities/dishes/selectors';

export const DishOrderContainer = ({ dishId, ...props }) => {
    const dish = useSelector(state => selectDishById(state, dishId));

    return <DishOrder dish={dish} {...props} />;
};
