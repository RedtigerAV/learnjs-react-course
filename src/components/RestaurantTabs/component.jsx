import { Button } from "../Button/component"

export const RestaurantTabs = ({ restaurants, onSelectRestaurant }) => {
    return (
        <div>
            {restaurants.map((restaurant, index) => <Button key={restaurant.id} title={restaurant.name} onClick={() => onSelectRestaurant(index)} />)}
        </div>
    )
}