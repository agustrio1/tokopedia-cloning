'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { auth, User, onAuthStateChanged } from "../firebase/init"; 

interface AuthContextType {
    user : User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider:  React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect (() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

        return () => unsubcribe();
    }, [])

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };