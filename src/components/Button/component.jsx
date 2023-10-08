import classNames from 'classnames';
import styles from './styles.module.scss';

export const Button = ({ title, disabled, type = 'button', appearance = 'basic', color, className, onClick }) => {
    return (
        <button
            className={classNames(styles.button, className, {
                [styles.button__basic]: appearance === 'basic',
                [styles.button__flat]: appearance === 'flat',
                [styles.button__fab]: appearance === 'fab',
                [styles.button__primary]: color === 'primary',
                [styles.disabled]: disabled,
            })}
            type={type}
            disabled={disabled}
            onClick={onClick}>
            {title}
        </button>)
}