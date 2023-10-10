import classNames from "classnames";
import { Button } from "../Button/component"
import styles from './styles.module.scss';
import { ActiveRestaurantIndexContext } from "../../contexts/ActiveRestaurantIndex";
import { useContext } from "react";
import { restaurants } from "../../constants/mock";

export const RestaurantTabs = () => {
    const { activeRestaurantIndex, setActiveRestaurantIndex } = useContext(ActiveRestaurantIndexContext);

    return (
        <div className={classNames(styles.root)}>
            {
                restaurants.map((restaurant, index) =>
                    <Button
                        key={restaurant.id}
                        title={restaurant.name}
                        appearance={activeRestaurantIndex === index ? 'flat' : 'basic'}
                        color="primary"
                        onClick={() => setActiveRestaurantIndex(index)}
                    />)
            }
        </div>
    )
}