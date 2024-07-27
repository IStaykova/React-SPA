import { create } from "../api/transport-request-api";

export function useCreateTransportRequest(){
   
    const createHandler = (serviceId, cargo, loading, unloading, date, message) => {
        create(serviceId, cargo, loading, unloading, date, message);
    }
    return createHandler;
}