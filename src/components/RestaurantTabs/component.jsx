import classNames from "classnames";
import { Button } from "../Button/component"
import { useState } from "react";
import styles from './styles.module.scss';

export const RestaurantTabs = ({ restaurants, onSelectRestaurant }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const onRestaurantTabClicked = (index) => {
        setActiveTabIndex(index);
        onSelectRestaurant(index);
    }

    return (
        <div className={classNames(styles.root)}>
            {
                restaurants.map((restaurant, index) =>
                    <Button
                        key={restaurant.id}
                        title={restaurant.name}
                        appearance={activeTabIndex === index ? 'flat' : 'basic'}
                        color="primary"
                        onClick={() => onRestaurantTabClicked(index)}
                    />)
            }
        </div>
    )
}