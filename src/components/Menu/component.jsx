import { Counter } from '../Counter/component';
import { Dish } from '../Dish/component';

export const Menu = ({ menu }) => {
    return (
        <ul>
            {menu.map(dish => (
                <li key={dish.id}>
                    <Dish dish={dish} />
                    <Counter min={0} max={5} />
                </li>
            ))}
        </ul>
    )
}