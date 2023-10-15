import classNames from 'classnames';
import { Counter } from '../Counter/component';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/selectors';

export const DishOrder = ({ dishId, className }) => {
    const dish = useSelector(state => selectDishById(state, dishId));

    return (
        <div className={classNames(className)}>
            <span>Price: ${dish.price}</span>
            <Counter min={0} max={5} />
        </div>
    )
};
