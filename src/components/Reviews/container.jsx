import { useDispatch } from 'react-redux';
import { Reviews } from './component';
import { useEffect } from 'react';
import { getUsers } from '../../redux/entities/users/thunks/get-users';

export const ReviewsContainer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return <Reviews {...props} />;
};
