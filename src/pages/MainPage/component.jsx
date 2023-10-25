import { Layout } from '../../components/Layout/component';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container';
import { RestaurantContainer } from '../../components/Restaurant/container';
import { useGetRestaurantsQuery } from '../../redux/services/restaurant-api';
import { CartContainer } from '../../components/Cart/container';

export const MainPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();
    const { data: restaurants, isLoading, isSuccess, isError } = useGetRestaurantsQuery();

    useEffect(() => {
        if (isSuccess && restaurants?.length) {
            setActiveRestaurantId(restaurants[0].id);
        }
    }, [restaurants, isSuccess]);

    return (
        <Layout>
            {isLoading && <div className={classNames(styles.notification)}>Loading...</div>}

            {isError && <div className={classNames(styles.notification, styles.error)}>Something went wrong. Please refresh the page</div>}

            {
                isSuccess && activeRestaurantId &&
                <>
                    <CartContainer restaurantId={activeRestaurantId} />
                    <div className={classNames(styles.root)}>
                        <RestaurantTabsContainer activeRestaurantId={activeRestaurantId} onRestaurantIdSelected={(id) => setActiveRestaurantId(id)} />

                        <RestaurantContainer restaurantId={activeRestaurantId} />
                    </div>
                </>
            }
        </Layout>
    );
}