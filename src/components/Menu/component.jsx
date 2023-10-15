import classNames from 'classnames';
import { Card } from '../Card/component';
import { Dish } from '../Dish/component';
import styles from './styles.module.scss';
import { DishOrder } from '../DishOrder/component';

export const Menu = ({ dishIds, className }) => {
    return (
        <div className={classNames(className)}>
            {dishIds.map(dishId => (
                <Card className={classNames(styles.dishCard)} key={dishId}>
                    <Dish dishId={dishId} className={classNames(styles.dish)} />
                    <DishOrder dishId={dishId} className={classNames(styles.dishOrder)} />
                </Card>
            ))}
        </div>
    )
}