import classNames from 'classnames';
import styles from './styles.module.scss';
import { RestaurantTabContainer } from '../RestaurantTab/container';

export const RestaurantTabs = ({ restaurantIds, activeRestaurantId, onRestaurantIdSelected }) => {
    return (
        <div className={classNames(styles.root)}>
            {
                restaurantIds.map((restaurantId) =>
                    <RestaurantTabContainer
                        key={restaurantId}
                        restaurantId={restaurantId}
                        selected={activeRestaurantId === restaurantId}
                        onSelect={() => onRestaurantIdSelected(restaurantId)} />
                )
            }
        </div>
    )
}