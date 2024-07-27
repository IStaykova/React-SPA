import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/details';

export const getOneTransport = (serviceId) => requester.get(`${BASE_URL}/${serviceId}`);

