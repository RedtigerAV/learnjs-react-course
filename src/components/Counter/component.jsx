import { useState } from 'react';
import { Button } from '../Button/component';

export const Counter = ({ min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER }) => {
    const [count, setCount] = useState(0);

    return <div>
        <Button title="-" disabled={count <= min} onClick={() => setCount(count - 1)} />
        &nbsp;{count}&nbsp;
        <Button title="+" disabled={count >= max} onClick={() => setCount(count + 1)} />
    </div>;
}