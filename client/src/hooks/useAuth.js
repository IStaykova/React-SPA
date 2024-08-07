import { login, register, logout } from "../api/auth-api";
import { useAuthContext } from "../contexts/AuthContext";


export const useLogin = () => {
    const {changeAuthState} = useAuthContext();

    const loginHandler = async (email, password) => {
        try {
        const {password: _, ...authData} = await login(email, password);
        
        changeAuthState(authData);
        return authData;
        } catch (error) {
            throw new Error('Login failed');
        }
    }
    return loginHandler;
};

export const useRegister = () => {
    const {changeAuthState} = useAuthContext();
    const registerHandler = async (username, email, password) => {
    try {
    const {password: _, ...authData} = await register(username, email, password);

    changeAuthState(authData);
    return authData; 
    } catch (error) {
        throw new Error('Registration failed');
    }
    }
    return registerHandler;
};

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext();

    const logoutHandler = async () => {
        try {
            await logout();
            localLogout();
        } catch (error) {
           throw new Error('Logout failed'); 
        }
    };
    return logoutHandler;
}
