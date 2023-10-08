import classNames from 'classnames';
import { Card } from '../Card/component';
import { Counter } from '../Counter/component';
import { Dish } from '../Dish/component';
import styles from './styles.module.scss';

export const Menu = ({ menu, className }) => {
    return (
        <div className={classNames(className)}>
            {menu.map(dish => (
                <Card className={classNames(styles.dish_card)} key={dish.id}>
                    <Dish dish={dish} className={classNames(styles.dish)} />
                    <div className={classNames(styles.dish_order)}>
                        <span>Price: ${dish.price}</span>
                        <Counter min={0} max={5} />
                    </div>
                </Card>
            ))}
        </div>
    )
}