import { restaurants } from '../../constants/mock';
import { Restaurant } from '../../components/Restaurant/component';
import { useContext } from 'react';
import { ActiveRestaurantIndexContext } from '../../contexts/ActiveRestaurantIndex';
import { Layout } from '../../components/Layout/component';

export const MainPage = () => {
    const { activeRestaurantIndex } = useContext(ActiveRestaurantIndexContext);

    return (
        <Layout>
            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </Layout>
    );
}