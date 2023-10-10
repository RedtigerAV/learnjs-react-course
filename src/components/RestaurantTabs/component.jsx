import classNames from "classnames";
import { Button } from "../Button/component"
import styles from './styles.module.scss';

export const RestaurantTabs = ({ restaurants, activeRestaurantIndex, onRestaurantIndexSelected }) => {
    return (
        <div className={classNames(styles.root)}>
            {
                restaurants.map((restaurant, index) =>
                    <Button
                        key={restaurant.id}
                        title={restaurant.name}
                        appearance={activeRestaurantIndex === index ? 'flat' : 'basic'}
                        color="primary"
                        onClick={() => onRestaurantIndexSelected(index)}
                    />)
            }
        </div>
    )
}