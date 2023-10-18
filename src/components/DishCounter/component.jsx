import classNames from 'classnames';
import { Counter } from '../Counter/component';

export const DishCounter = ({ dish, className }) => {
    if (!dish) {
        return null;
    }

    return (
        <div className={classNames(className)}>
            <span>Price: ${dish.price}</span>
            <Counter min={0} max={5} />
        </div>
    )
};
