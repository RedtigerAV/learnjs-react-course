import { NavLink } from 'react-router-dom';
import { Button } from '../Button/component';

export const RestaurantTab = ({ restaurantId, name }) => {
    return (
        <NavLink to={restaurantId}>
            {({ isActive }) => (
                <Button
                    title={name}
                    appearance={isActive ? 'flat' : 'basic'}
                    color="primary"
                />
            )}
        </NavLink>
    )
};
