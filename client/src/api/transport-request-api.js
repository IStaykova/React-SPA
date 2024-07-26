// import requester, { get } from "./requester";

// const base_URL = 'http://localhost:3030/jsonstore/transports/types/requests';

// const create = async (serviceId, cargo, loading, unloading, date, message) => 
//     requester.post(base_URL, 
//         {cargo, 
//         loading, 
//         unloading,
//         date, 
//         message});


// const getAll = async (serviceId) => {
//     const result = await requester.get(base_URL);
//     const allRequests = Object.values(result);
//     return allRequests;
// }

// const transportRequestAPI = {
//     create, 
//     getAll
// }
// export default transportRequestAPI;