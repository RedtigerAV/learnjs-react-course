import { Layout } from '../../components/Layout/component';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { RestaurantTabsContainer } from '../../components/RestaurantTabs/container';
import { Outlet } from 'react-router-dom';

export const MainPage = ({ isLoading, isError, isSuccess }) => {
    return (
        <Layout>
            {isLoading && <div className={classNames(styles.notification)}>Loading...</div>}

            {isError && <div className={classNames(styles.notification, styles.error)}>Something went wrong. Please refresh the page</div>}

            {
                isSuccess &&
                <div className={classNames(styles.root)}>
                    <RestaurantTabsContainer />

                    <Outlet />
                </div>
            }
        </Layout>
    );
}