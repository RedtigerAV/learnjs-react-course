export const Dish = ({ dish }) => {
    return (
        <div>
            <div>{dish.name} - <strong>${dish.price}</strong></div>
            <i>Ingredients: {dish.ingredients.join(', ')}</i>
        </div>
    )
}