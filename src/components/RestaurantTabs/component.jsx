import classNames from 'classnames';
import styles from './styles.module.scss';
import { RestaurantTab } from '../RestaurantTab/component';

export const RestaurantTabs = ({ restaurantIds, activeRestaurantId, onRestaurantIdSelected }) => {
    return (
        <div className={classNames(styles.root)}>
            {
                restaurantIds.map((restaurantId) =>
                    <RestaurantTab
                        key={restaurantId}
                        restaurantId={restaurantId}
                        selected={activeRestaurantId === restaurantId}
                        onSelect={() => onRestaurantIdSelected(restaurantId)} />
                )
            }
        </div>
    )
}