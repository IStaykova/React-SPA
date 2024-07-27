import requester from "./requester";

const base_URL = 'http://localhost:3030/users';

export const login = (email, password) => requester.post(`${base_URL}/login`, {email, password});
export const register = (username, email, password) => requester.post(`${base_URL}/register`, {username, email, password});
export const logout = () => requester.get(`${base_URL}/logout`);

