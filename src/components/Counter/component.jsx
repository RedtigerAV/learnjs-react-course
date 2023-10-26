import { Button } from '../Button/component';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Counter = ({ count, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, className, onChangeCount }) => {
    return <div className={classNames(styles.counter, className)}>
        <Button title="—" appearance='fab' disabled={count <= min} onClick={() => onChangeCount(count - 1)} />
        &nbsp;{count}&nbsp;
        <Button title="+" appearance='fab' disabled={count >= max} onClick={() => onChangeCount(count + 1)} />
    </div>;
}