import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    name: string;
    email: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    login: (userData?: Partial<User>) => void;
    logout: () => void;
    isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => { },
    logout: () => { },
    isLoggedIn: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(() => {
        try {
            const stored = localStorage.getItem('carevia_user');
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    });

    const login = (userData?: Partial<User>) => {
        const defaultUser: User = {
            name: userData?.name ?? 'Khách hàng',
            email: userData?.email ?? 'user@carevia.vn',
            avatar: userData?.avatar,
        };
        setUser(defaultUser);
        localStorage.setItem('carevia_user', JSON.stringify(defaultUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('carevia_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
