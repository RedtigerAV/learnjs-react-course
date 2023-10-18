import { Layout } from '../../components/Layout/component';
import { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/selectors';
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container';
import { RestaurantContainer } from '../../components/Restaurant/container';

export const MainPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds);
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

    return (
        <Layout>
            <div className={classNames(styles.root)}>
                <RestaurantTabsContainer activeRestaurantId={activeRestaurantId} onRestaurantIdSelected={(id) => setActiveRestaurantId(id)} />

                <RestaurantContainer restaurantId={activeRestaurantId} />
            </div>
        </Layout>
    );
}