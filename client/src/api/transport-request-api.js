import requester from "./requester";

const request_URL = 'http://localhost:3030/data/transport-requests';

export const create = async (transportId, cargo, loading, unloading, date, message) => requester.post(request_URL, { transportId, cargo, loading, unloading, date, message});

export const getAll = async (transportId) => {
    const response = await requester.get(request_URL);
  if (transportId) {
    return response.filter(request => request.transportId === transportId);
  }
  return response;
}
   
    
 
