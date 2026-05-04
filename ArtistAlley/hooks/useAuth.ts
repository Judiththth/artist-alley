// Gestionar estado de sesión del usuario.

import { useState, useEffect, useContext, createContext } from 'react';
import { User } from '../types';
import supabase from '../lib/supabase';

// Tipos para el usuario y sesión
// Primero se definen los tipos
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

//Luego se crea el contexto de autenticación, que tiene 2 partes: el contexto en sí y el proveedor del contexto.
// Contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor 
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession() // le pregunta a Supabase si hay una sesión activa
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email ?? '', // Si el email es null, se asigna una cadena vacía
        })
      } else {
        setUser(null)
      }
    }
    checkSession()
  }, []);

  return ();

}

