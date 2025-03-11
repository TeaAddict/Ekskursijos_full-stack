import { jwtDecode } from "jwt-decode";
import { JSX } from "react";
import { Navigate } from "react-router-dom";

interface JwtPayload {
  scope: "USER" | "ADMIN" | string;
  sub?: string;
  exp?: number;
}

const getUserRole = (): string | null => {
  const token = localStorage.getItem("token");

  if (!token) return null;
  try {
    const decoded: JwtPayload = jwtDecode(token);
    return decoded.scope;
  } catch (error) {
    console.error("Invalid JWT:", error);
    return null;
  }
};

interface ProtectedRouteProps {
  element: JSX.Element;
  requiredRole: "USER" | "ADMIN";
}

const ProtectedRoute = ({ element, requiredRole }: ProtectedRouteProps) => {
  const userRole = getUserRole();

  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return element;
};
export default ProtectedRoute;
