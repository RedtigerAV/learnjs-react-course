import { useState } from "react";

export const Counter = ({ min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER }) => {
    const [count, setCount] = useState(0);

    return <div>
        <button disabled={count <= min} onClick={() => setCount(count - 1)}>-</button>
        &nbsp;{count}&nbsp;
        <button disabled={count >= max} onClick={() => setCount(count + 1)}>+</button>
    </div>;
}