import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/entities/users/selectors';
import { User } from './component';

export const UserContainer = ({ userId, ...props }) => {
    const user = useSelector(state => selectUserById(state, userId));

    return <User user={user} {...props} />;
};
