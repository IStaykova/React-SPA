import requester from "./requester";

const base_URL = 'http://localhost:3030/data/transport-requests';


export const create = async (serviceId, cargo, loading, unloading, date, message) => requester.post(base_URL, {serviceId, cargo, loading, unloading, date, message});



// export const getAll = async (serviceId) => {
//     const result = await requester.get(base_URL);
//     const allRequests = Object.values(result);
//     return allRequests;
// }
