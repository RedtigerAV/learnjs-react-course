import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRequestStatusById } from '../redux/ui/requests/selectors';
import { useState } from 'react';

export function useMakeRequest(thunk) {
    // INFO: При использовании useRef ре-рендер происходит только после выполнении запроса
    // Из-за этого не происходит обновление статуса запроса в компоненте при pending
    // Использую useState, чтобы при переходе запроса в статус pending происходил ре-рендер
    const [requestId, setRequestId] = useState();
    const dispatch = useDispatch();
    const requestStatus = useSelector(state => selectRequestStatusById(state, requestId));

    const makeRequest = useCallback((...params) => {
        const request = dispatch(thunk(...params));

        setRequestId(request.requestId);
    }, [thunk]);

    return [requestStatus, makeRequest];
}