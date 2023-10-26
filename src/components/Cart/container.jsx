import { useSelector } from 'react-redux';
import { Cart } from './component';
import { selectCartTotal } from '../../redux/ui/cart/selectors';

export const CartContainer = () => {
    const totalOrder = useSelector(selectCartTotal);

    return <Cart totalOrder={totalOrder} />;
};
