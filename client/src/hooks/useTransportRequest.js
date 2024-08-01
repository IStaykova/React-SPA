import { useEffect, useState } from "react";
import { create, getAll } from "../api/transport-request-api";

export function useCreateTransportRequest(){
   
    const createHandler = (transportId, cargo, loading, unloading, date, message) => {
        create(transportId, cargo, loading, unloading, date, message);
    }
    return createHandler;
}

export function useGetAllTransportRequests(transportId){
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAll(transportId);
            setRequests(result);
        })();
    }, [transportId]);
    return [requests, setRequests];
}