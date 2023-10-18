import classNames from 'classnames';
import { Counter } from '../Counter/component';

export const DishOrder = ({ dish, className }) => {
    return (
        <div className={classNames(className)}>
            <span>Price: ${dish.price}</span>
            <Counter min={0} max={5} />
        </div>
    )
};
