import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

interface AuthContextType {
  isLoggedIn: boolean;
  userEmail: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const login = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    toast.success(`Welcome, ${email}! You are now logged in.`);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
    toast.info("You have been logged out.");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
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