import { useParams } from 'react-router-dom';
import { MainPage } from './component';
import { useRef } from 'react';
import { useGetRestaurantsQuery } from '../../redux/services/restaurant-api';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const MainPageContainer = () => {
    const { restaurantId } = useParams();
    const activeRestaurantId = useRef(restaurantId);
    const { data: restaurants, isLoading, isSuccess, isError } = useGetRestaurantsQuery();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSuccess || !restaurants?.length) {
            return;
        }

        const restaurantSelected = !!activeRestaurantId.current;
        const selectedRestaurantExists = restaurants.some((restaurant) => restaurant.id === activeRestaurantId.current);

        if (restaurantSelected === false) {
            navigate(`./${restaurants[0].id}`);
        } else if (selectedRestaurantExists === false) {
            navigate('/not-found');
        }

    }, [restaurants, isSuccess]);


    return <MainPage isLoading={isLoading} isError={isError} isSuccess={isSuccess} />;
};
