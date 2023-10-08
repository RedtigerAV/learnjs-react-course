import classNames from 'classnames';
import styles from './styles.module.scss';

export const Footer = ({ className, children }) => {
    return (<div className={classNames(styles.footer, className)}>{children}</div>)
}