import { Counter } from "../Counter/component"

export const Menu = ({ menu }) => {
    return (
    <ul>
        {menu.map(menuItem => (
            <li key={menuItem.id}>
                <div>{menuItem.name} - <strong>${menuItem.price}</strong></div>
                <i>Ingredients: {menuItem.ingredients.join(', ')}</i>
                <Counter min={0} max={5} />
            </li>
        ))}
    </ul>
    )
}