import classNames from 'classnames';
import { Card } from '../Card/component';
import styles from './styles.module.scss';
import { DishOrder } from '../DishOrder/component';

export const Menu = ({ dishes, className }) => {
    return (
        <div className={classNames(className)}>
            {dishes.map(dish => (
                <Card className={classNames(styles.dishCard)} key={dish.id}>
                    <DishOrder dish={dish} />
                </Card>
            ))}
        </div>
    )
}