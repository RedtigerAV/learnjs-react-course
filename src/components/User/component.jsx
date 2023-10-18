import classNames from 'classnames';
import styles from './styles.module.scss';

export const User = ({ user }) => {
    return <span className={classNames(styles.userName)}>{user.name}</span>;
};
