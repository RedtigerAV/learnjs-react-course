import { useGetDishesQuery } from '../../redux/services/dish-api';
import { Menu } from './component';

export const MenuContainer = ({ restaurantId, ...props }) => {
    const { data: dishes, isFetching, isError } = useGetDishesQuery(restaurantId);

    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong. Please refresh the page</div>;
    }

    return (
        <Menu dishes={dishes} {...props} />
    )
};
