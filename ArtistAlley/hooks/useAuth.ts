// Gestionar estado de sesión del usuario.

import { useState, useEffect, useContext, createContext } from 'react';
import { User } from '../types';

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

}

