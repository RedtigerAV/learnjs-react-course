import { Button } from '../Button/component';

export const RestaurantTab = ({ name, selected, onSelect }) => {
    return (
        <Button
            title={name}
            appearance={selected ? 'flat' : 'basic'}
            color="primary"
            onClick={() => onSelect()}
        />
    )
};
