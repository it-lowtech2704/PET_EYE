import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export type UserRole = 'admin' | 'shop' | 'customer' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0],
      email,
      role: role || 'customer'
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    // Redirect based on role
    switch (newUser.role) {
      case 'admin':
        navigate('/admin/dashboard');
        break;
      case 'shop':
        navigate('/shop/dashboard');
        break;
      case 'customer':
        navigate('/');
        break;
      default:
        navigate('/');
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role: role || 'customer'
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    // Redirect based on role
    switch (newUser.role) {
      case 'admin':
        navigate('/admin/dashboard');
        break;
      case 'shop':
        navigate('/shop/dashboard');
        break;
      case 'customer':
        navigate('/');
        break;
      default:
        navigate('/');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
