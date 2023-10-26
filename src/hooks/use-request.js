import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRequestStatusById } from '../redux/ui/requests/selectors';
import { useEffect } from 'react';

export function useRequest(thunk, ...params) {
    const request = useRef();
    const dispatch = useDispatch();
    const requestStatus = useSelector(state => selectRequestStatusById(state, request.current?.requestId));

    useEffect(() => {
        request.current = dispatch(thunk(...params));

        return () => {
            request.current.abort();
            request.current = null;
        }
    }, [...params, thunk]);

    return requestStatus;
}