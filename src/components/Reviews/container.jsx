import { Reviews } from './component';
import { getUsers } from '../../redux/entities/users/thunks/get-users';
import { useRequest } from '../../hooks/use-request';

export const ReviewsContainer = (props) => {
    useRequest(getUsers);

    return <Reviews {...props} />;
};
