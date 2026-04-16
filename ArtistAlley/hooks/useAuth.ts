// Gestionar estado de sesión del usuario.

import { useState, useEffect, useCallback, useContext, createContext } from 'react';

// Tipos para el usuario y sesión
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: User) => void;
}

// Crear contexto de autenticación
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};

// Provider de autenticación
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar sesión al cargar la aplicación
  useEffect(() => {
    const checkSession = async () => {
      try {
        // Aquí iría la lógica para verificar la sesión actual
        // Por ejemplo, llamar a una API de verificación
        setIsLoading(false);
      } catch (error) {
        console.error('Error al verificar sesión:', error);
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Lógica de inicio de sesión
      // const response = await fetch('/api/auth/login', { ... });
      // const data = await response.json();
      // setUser(data.user);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(
    async (email: string, password: string, name: string) => {
      setIsLoading(true);
      try {
        // Lógica de registro
        // const response = await fetch('/api/auth/signup', { ... });
        // const data = await response.json();
        // setUser(data.user);
      } catch (error) {
        console.error('Error al registrarse:', error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      // Lógica de cierre de sesión
      // await fetch('/api/auth/logout');
      setUser(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateUser = useCallback((updatedUser: User) => {
    setUser(updatedUser);
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

