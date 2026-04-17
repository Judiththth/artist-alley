// Gestionar estado de sesión del usuario.

import { useState, useEffect, useContext, createContext } from 'react';
import { User } from '../types';

// Tipos para el usuario y sesión

const AuthContext = createContext<AuthContextType | undefined>(undefined);
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}



