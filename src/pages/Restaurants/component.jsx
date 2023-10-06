import { useState } from 'react';
import { restaurants } from './../../constants/mock';
import { Restaurant } from '../../components/Restaurant/component';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { ThemeContext } from '../../contexts/Theme';
import { useContext } from 'react';
import { Button } from '../../components/Button/component';

export const Restaurants = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div data-theme={theme}>
            <Button title="Change theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />

            <RestaurantTabs restaurants={restaurants} onSelectRestaurant={setActiveRestaurantIndex} />

            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </div>
    );
}