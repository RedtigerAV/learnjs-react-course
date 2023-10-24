export const Cart = ({ totalOrder }) => {
    return (
        <div>
            Total order: ${totalOrder.toFixed(2)}
        </div>
    )
};
