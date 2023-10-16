import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/entities/users/selectors';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const User = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId));

    return (
        <span className={classNames(styles.userName)}>{user.name}</span>
    )
};
