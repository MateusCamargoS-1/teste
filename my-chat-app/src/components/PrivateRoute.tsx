import React from "react";
import { Navigate } from "react-router-dom";

// Função para verificar se o usuário está autenticado
const isAuthenticated = () => {
  const token = localStorage.getItem("authToken"); // Verifica o token de autenticação
  return token !== null;
};

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
