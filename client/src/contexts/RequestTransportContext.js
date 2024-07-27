import { createContext } from "react";


export const RequestContext = createContext({
    cargo: '',
    loading: '',
    unloading: '',
    date: '',
    accessToken: '',
    isAuthenticated: false,
    changeRequestState: (requestState = {}) => null,
});