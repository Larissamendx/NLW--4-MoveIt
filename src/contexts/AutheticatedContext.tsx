import { createContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';


interface AutheticatedContextData {
    autheticated: () => void;
    isAutheticated: boolean;
} 

interface AutheticatedProviderProps {
    children: ReactNode;

} 

export const AutheticatedContext = createContext({} as AutheticatedContextData);

export function AutheticatedProvider({ 
    children,
    ...rest
} : AutheticatedProviderProps) 
{
    const [isAutheticated, setIsAutheticated] = useState(true);

    function autheticated() {
       setIsAutheticated(true)
        console.log("CASONEfsajf")
    }


    return(
        <AutheticatedContext.Provider 
            value={{
                autheticated,
                isAutheticated
            }}>
            { children }
        </AutheticatedContext.Provider>
    );
} 