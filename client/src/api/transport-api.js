import requester from "./requester";

const transport_URL = 'http://localhost:3030/data/transports/list';
const details_URL = 'http://localhost:3030/data/details';

export const getAll = async () => {
   try{
   const result  = await requester.get(transport_URL);
   const transportTypes = Object.values(result);
   return transportTypes;
} catch(error){
   console.error("Failed to fetch transports!", error);
   throw error;
}
}
export const getOne = (transportId) => requester.get(`${details_URL}/${transportId}`);


