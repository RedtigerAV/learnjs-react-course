import classNames from "classnames"
import styles from './styles.module.scss';

export const Card = ({ className, children }) => {
    return <div className={classNames(styles.card, className)}>{children}</div>
}