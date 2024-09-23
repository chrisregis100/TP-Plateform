/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

// Créer un contexte pour l'authentification
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  // Fonction pour vérifier l'état de la session
  const checkAuth = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/session-status', {
        method: 'GET',
        credentials: 'include', // Inclure les cookies de session
      });
      const data = await response.json();
      setAuthState({
        isAuthenticated: data.isAuthenticated,
        user: data.user,
      });
    } catch (error) {
      console.error('Erreur lors de la vérification de la session:', error);
      setAuthState({
        isAuthenticated: false,
        user: null,
      });
    }
  };

  useEffect(() => {
    checkAuth(); // Vérifier l'authentification dès le chargement de l'application
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
