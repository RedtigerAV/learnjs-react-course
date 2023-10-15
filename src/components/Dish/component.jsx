import classNames from 'classnames';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/selectors';

export const Dish = ({ dishId, className }) => {
    const dish = useSelector(state => selectDishById(state, dishId));

    return (
        <div className={classNames(styles.root, className)}>
            <span className={classNames(styles.name)}>{dish.name}</span>
            <div className={classNames(styles.ingredients)}>{dish.ingredients.join(', ')}</div>
        </div>
    )
}