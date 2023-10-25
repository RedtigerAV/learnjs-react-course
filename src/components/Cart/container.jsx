import { useSelector } from 'react-redux';
import { Cart } from './component';
import { selectCartModule } from '../../redux/ui/cart/selectors';
import { useGetDishesQuery } from '../../redux/services/dish-api';
import { useEffect } from 'react';
import { useState } from 'react';

export const CartContainer = ({ restaurantId }) => {
    const [totalOrder, setTotalOrder] = useState(0);
    const cart = useSelector(selectCartModule);
    const { data: dishes } = useGetDishesQuery(restaurantId);

    useEffect(() => {
        if (!dishes || !cart) {
            return;
        }

        const newTotalOrder = Object.entries(cart).reduce((total, [dishId, quantity]) => {
            const dish = dishes.find((dish) => dish.id === dishId);
            const price = dish ? dish.price : 0;

            return total + price * quantity;
        }, 0);

        setTotalOrder(newTotalOrder);
    }, [cart, dishes]);

    return <Cart totalOrder={totalOrder} />;
};
