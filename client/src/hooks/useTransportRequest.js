import { useEffect, useState } from "react";
import { create, getAll, getOne, remove } from "../api/transport-request-api";
import { useAuthContext } from "../contexts/AuthContext";

export function useCreateTransportRequest(){
    const createHandler = (transportId, cargo, loading, unloading, date, message) => {
    return create(transportId, cargo, loading, unloading, date, message);
}
return createHandler;
}

export function useGetOneTransportRequest(requestId){
    const [request, setRequest] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const result = await getOne(requestId);
                setRequest(result);
            } catch (error) {
                console.log('Cannot fetch current transport request', error)
            }
        })();
    }, [requestId]);
    return [request, setRequest];
}

export function useGetAllTransportRequests(transportId){
    const [requests, setRequests] = useState([]);
    const { userId } = useAuthContext();

    useEffect(() => {
        (async () => {
            try {
                const result = await getAll(transportId);
                const curUserRequests = result.filter(request => request._ownerId === userId);
                setRequests(curUserRequests);
            } catch (error) {
                console.log('Cannot fetch all transport requests', error)
            }
            
        })();
    }, [transportId, userId]);
    return [requests, setRequests];
}

export function useDeleteHandler(){
 
    const deleteHandler = (requestId) => {
        return remove(requestId); 
    }
 return deleteHandler;
}