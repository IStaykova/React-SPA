import { useState, useEffect } from "react";
import { getAll, getOne } from "../api/transport-api";

export function useGetAllTransports(){
const [transports, setTransports] = useState([]);

useEffect(() => {
  getAll()
  .then(result => setTransports(result))
  .catch(error => console.log('Cannot fetch transport data', error))
}, []);

return [transports, setTransports]
}

export function useGetOneTransport(transportId){
const [transport, setTransport] = useState({});

useEffect(() => {
    getOne(transportId)
    .then(result => setTransport(result))
    .catch(error => console.log('Cannot fetch current transport', error));
    }, [transportId]);

return [transport, setTransport]
}
