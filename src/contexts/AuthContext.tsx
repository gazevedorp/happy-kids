import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  username: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  signup: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  resetPassword: (email: string, newPassword: string) => Promise<'success' | 'not_found' | 'invalid_password'>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar se há um usuário logado ao carregar a aplicação
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      // Buscar usuários registrados no localStorage
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      
      // Verificar se o usuário existe e a senha está correta
      const foundUser = registeredUsers.find((u: any) => 
        u.username === username && u.password === password
      );

      if (foundUser) {
        const userData = { username: foundUser.username, email: foundUser.email };
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    }
  };

  const signup = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      // Buscar usuários já registrados
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      
      // Verificar se o usuário já existe
      const userExists = registeredUsers.some((u: any) => u.username === username);
      
      if (userExists) {
        return false; // Usuário já existe
      }

      // Validar senha
      if (password.length < 8 || /^\d+$/.test(password)) {
        return false; // Senha inválida
      }

      // Adicionar novo usuário
      const newUser = { username, email, password };
      registeredUsers.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

      // Fazer login automaticamente após o cadastro
      const userData = { username, email };
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
      
      return true;
    } catch (error) {
      console.error('Erro no cadastro:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const resetPassword = async (email: string, newPassword: string): Promise<'success' | 'not_found' | 'invalid_password'> => {
    // Validar senha
    if (newPassword.length < 8 || /^\d+$/.test(newPassword)) {
      return 'invalid_password';
    }
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userIndex = registeredUsers.findIndex((u: any) => u.email === email);
    if (userIndex === -1) {
      return 'not_found';
    }
    registeredUsers[userIndex].password = newPassword;
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    return 'success';
  };

  const value: AuthContextType = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}; 