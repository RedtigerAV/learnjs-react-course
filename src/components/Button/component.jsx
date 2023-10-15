import classNames from 'classnames';
import styles from './styles.module.scss';

export const Button = ({ title, disabled, type = 'button', appearance = 'basic', color, className, onClick }) => {
    return (
        <button
            className={classNames(styles.button, className, {
                [styles.buttonBasic]: appearance === 'basic',
                [styles.buttonFlat]: appearance === 'flat',
                [styles.buttonFab]: appearance === 'fab',
                [styles.buttonPrimary]: color === 'primary',
                [styles.disabled]: disabled,
            })}
            type={type}
            disabled={disabled}
            onClick={onClick}>
            {title}
        </button>)
}