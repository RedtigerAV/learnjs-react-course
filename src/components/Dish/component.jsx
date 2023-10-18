import classNames from 'classnames';
import styles from './styles.module.scss';

export const Dish = ({ dish, className }) => {
    if (!dish) {
        return null;
    }

    return (
        <div className={classNames(styles.root, className)}>
            <span className={classNames(styles.name)}>{dish.name}</span>
            <div className={classNames(styles.ingredients)}>{dish.ingredients.join(', ')}</div>
        </div>
    )
}