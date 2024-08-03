import requester from "./requester";

const request_URL = 'http://localhost:3030/data/transport-requests';

export const create = (transportId, cargo, loading, unloading, date, message) => requester.post(request_URL, { transportId, cargo, loading, unloading, date, message});

export const getAll = (transportId) => {
    
    const url = transportId
    ? `${request_URL}?where=transportId%3D%22${transportId}%22`
    : request_URL;
  return requester.get(url);
}

export const remove = (requestId) => requester.del(`${request_URL}/${requestId}`);
   
    
 
