import { Navigate } from "react-router-dom";
import { ReactNode, useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";

export function Protected({ children }: { children: ReactNode }) {
  const authContext = useContext(AuthContext);

  if (!authContext || !authContext.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
