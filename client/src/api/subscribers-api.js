import requester from "./requester";

const subscriber_URL = 'http://localhost:3030/data/subscribers';

export const createNew = async (email) => {
    try {
        await requester.post(subscriber_URL,{ email });
        
    } catch (error) {
        console.log(error, "Failed to create new subscriber");
        throw error;
    }
};
    

export const getAll = async () => {
    try {
        const result = await requester.get(subscriber_URL);
        const subscribers = Object.values(result);
        console.log(subscribers)
        return subscribers;
    } catch (error) {
        console.log(error, "Failed to fetch subscribers");
     throw error;
    }
 
}