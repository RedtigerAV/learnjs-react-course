import classNames from 'classnames';
import { Counter } from '../Counter/component';

export const DishCounter = ({ dish, className, quantity, onSetQuantity }) => {
    if (!dish) {
        return null;
    }

    return (
        <div className={classNames(className)}>
            <span>Price: ${dish.price}</span>
            <Counter count={quantity} min={0} max={5} onChangeCount={count => onSetQuantity(count)} />
        </div>
    )
};
