import { useState } from 'react';
import { Button } from '../Button/component';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Counter = ({ min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, className }) => {
    const [count, setCount] = useState(0);

    return <div className={classNames(styles.counter, className)}>
        <Button title="—" appearance='fab' disabled={count <= min} onClick={() => setCount(count - 1)} />
        &nbsp;{count}&nbsp;
        <Button title="+" appearance='fab' disabled={count >= max} onClick={() => setCount(count + 1)} />
    </div>;
}