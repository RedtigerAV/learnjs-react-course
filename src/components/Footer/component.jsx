import classNames from 'classnames';
import styles from './styles.module.scss';

export const Footer = ({ className }) => {
    const currentYear = new Date().getUTCFullYear();

    return (
        <div className={classNames(styles.footer, className)}>
            &copy; 2014 - {currentYear} DishDash. All Rights Reserved
        </div>
    )
}