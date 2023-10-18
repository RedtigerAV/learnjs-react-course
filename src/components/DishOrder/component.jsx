import { Dish } from '../Dish/component';
import styles from './styles.module.scss';
import { DishCounter } from '../DishCounter/component';

export const DishOrder = ({ dish, className }) => {
    if (!dish) {
        return 'Loading...';
    }

    return (
        <div className={className}>
            <Dish dish={dish} className={styles.dish} />
            <DishCounter dish={dish} className={styles.dishCounter} />
        </div>
    )
};
