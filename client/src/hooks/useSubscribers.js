import { useEffect, useState } from "react";
import { createNew, getAll } from "../api/subscribers-api"

export function useCreateSubscriber(){

    const createHandler = (email) => {
        return createNew(email);
    }
    return createHandler;
}

export function useGetAllSubscribers(){
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        (async () => {
            try {
            const result = await getAll(email);
            setSubscribers(result);
            console.log(result)
            } catch (error) {
                console.log(error, 'Failed to load subscribers');
            }
        })();
    }, []);
    return [subscribers, setSubscribers];

}