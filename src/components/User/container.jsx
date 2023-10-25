import { User } from './component';
import { useGetUsersQuery } from '../../redux/services/user-api';

export const UserContainer = ({ userId, ...props }) => {
    const { user } = useGetUsersQuery(undefined, {
        selectFromResult: result => ({
            ...result,
            user: result.data?.find(user => user.id === userId)
        })
    });

    return <User user={user} {...props} />;
};
