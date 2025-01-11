import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/routes.tsx";
import { AuthContextProvider } from "./Context/AuthContext.tsx";
import "./index.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
