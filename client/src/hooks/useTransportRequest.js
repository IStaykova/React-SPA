import { useEffect, useState } from "react";
import { create, getAll } from "../api/transport-request-api";
import { useAuthContext } from "../contexts/AuthContext";

export function useCreateTransportRequest(){
   
const createHandler = (transportId, cargo, loading, unloading, date, message) => {
    return create(transportId, cargo, loading, unloading, date, message);
}
return createHandler;
}

export function useGetAllTransportRequests(transportId){
    const [requests, setRequests] = useState([]);
    const { userId } = useAuthContext();

    useEffect(() => {
        (async () => {
            const result = await getAll(transportId);
            const curUserRequests = result.filter(request => request._ownerId === userId);
            setRequests(curUserRequests);
        })();
    }, [transportId, userId]);
    return [requests, setRequests];
}