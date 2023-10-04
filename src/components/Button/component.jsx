import classNames from 'classnames';
import styles from './style.module.scss';

export const Button = ({ title, disabled, onClick, type = 'button' }) => {
    return <button className={classNames(styles.button)} type={type} disabled={disabled} onClick={onClick}>{title}</button>
}