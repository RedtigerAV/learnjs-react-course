import { Dish } from '../Dish/component';
import styles from './styles.module.scss';
import { DishCounterContainer } from '../DishCounter/container';

export const DishOrder = ({ dish, className }) => {
    if (!dish) {
        return 'Loading...';
    }

    return (
        <div className={className}>
            <Dish dish={dish} className={styles.dish} />
            <DishCounterContainer dish={dish} className={styles.dishCounter} />
        </div>
    )
};
