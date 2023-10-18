import classNames from 'classnames';
import { Card } from '../Card/component';
import styles from './styles.module.scss';
import { DishOrderContainer } from '../DishOrder/container';

export const Menu = ({ dishIds, className }) => {
    return (
        <div className={classNames(className)}>
            {dishIds.map(dishId => (
                <Card className={classNames(styles.dishCard)} key={dishId}>
                    <DishOrderContainer dishId={dishId} />
                </Card>
            ))}
        </div>
    )
}