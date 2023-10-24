import { Layout } from '../../components/Layout/component';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../redux/entities/restaurants/selectors';
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container';
import { RestaurantContainer } from '../../components/Restaurant/container';
import { getRestaurants } from '../../redux/entities/restaurants/thunks/get-restaurants';
import { REQUEST_STATUS } from '../../constants/request-status';
import { useRequest } from '../../hooks/use-request';
import { CartContainer } from '../../components/Cart/container';

export const MainPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds);
    const restaurantsLoadingStatus = useRequest(getRestaurants);
    const [activeRestaurantId, setActiveRestaurantId] = useState();

    useEffect(() => {
        if (restaurantIds?.length && restaurantsLoadingStatus === REQUEST_STATUS.fulfilled) {
            setActiveRestaurantId(restaurantIds[0]);
        }
    }, [restaurantIds, restaurantsLoadingStatus]);

    return (
        <Layout>
            <CartContainer />
            {
                (restaurantsLoadingStatus === REQUEST_STATUS.pending || restaurantsLoadingStatus === REQUEST_STATUS.idle) &&
                <div className={classNames(styles.notification)}>Loading...</div>
            }
            {
                restaurantsLoadingStatus === REQUEST_STATUS.rejected &&
                <div className={classNames(styles.notification, styles.error)}>Something went wrong. Please refresh the page</div>
            }
            {
                activeRestaurantId &&
                <div className={classNames(styles.root)}>
                    <RestaurantTabsContainer activeRestaurantId={activeRestaurantId} onRestaurantIdSelected={(id) => setActiveRestaurantId(id)} />

                    <RestaurantContainer restaurantId={activeRestaurantId} />
                </div>
            }
        </Layout>
    );
}