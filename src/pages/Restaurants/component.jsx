import { useState } from 'react';
import { restaurants } from './../../constants/mock';
import { Restaurant } from '../../components/Restaurant/component';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { ThemeContext } from '../../contexts/Theme';
import { useContext } from 'react';
import { Button } from '../../components/Button/component';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { Header } from '../../components/Header/component';
import { Logo } from '../../components/Logo/component';
import { Footer } from '../../components/Footer/component';

export const Restaurants = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    const { theme, setTheme } = useContext(ThemeContext);
    const currentYear = new Date().getUTCFullYear();

    return (
        <div className={classNames(styles.root)} data-theme={theme}>
            <Header
                className={classNames(styles.header)}
                logo={<Logo />}
                content={<RestaurantTabs restaurants={restaurants} onSelectRestaurant={setActiveRestaurantIndex} />}
                action={
                    <Button
                        title={theme === 'light' ? <>&#127768;</> : <>&#127764;</>}
                        appearance='fab'
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                }>
            </Header>

            <div className={classNames(styles.content)}>
                <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
            </div>

            <Footer className={classNames(styles.footer)}>
                &copy; 2014 - {currentYear} DishDash. All Rights Reserved
            </Footer>
        </div >
    );
}