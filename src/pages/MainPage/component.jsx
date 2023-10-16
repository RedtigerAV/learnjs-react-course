import { Restaurant } from '../../components/Restaurant/component';
import { Layout } from '../../components/Layout/component';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/selectors';

export const MainPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds);
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

    return (
        <Layout>
            <div className={classNames(styles.root)}>
                <RestaurantTabs
                    restaurantIds={restaurantIds}
                    activeRestaurantId={activeRestaurantId}
                    onRestaurantIdSelected={(id) => setActiveRestaurantId(id)} />
                <Restaurant restaurantId={activeRestaurantId} />
            </div>
        </Layout>
    );
}