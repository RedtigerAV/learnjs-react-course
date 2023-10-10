import { restaurants } from '../../constants/mock';
import { Restaurant } from '../../components/Restaurant/component';
import { Layout } from '../../components/Layout/component';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const MainPage = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

    return (
        <Layout>
            <div className={classNames(styles.root)}>
                <RestaurantTabs
                    restaurants={restaurants}
                    activeRestaurantIndex={activeRestaurantIndex}
                    onRestaurantIndexSelected={(index) => setActiveRestaurantIndex(index)} />
                <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
            </div>
        </Layout>
    );
}