import classNames from 'classnames';
import styles from './styles.module.scss';
import { RestaurantTabContainer } from '../RestaurantTab/container';

export const RestaurantTabs = ({ restaurantIds }) => {
    return (
        <div className={classNames(styles.root)}>
            {
                restaurantIds.map((restaurantId) =>
                    <RestaurantTabContainer
                        key={restaurantId}
                        restaurantId={restaurantId} />
                )
            }
        </div>
    )
}