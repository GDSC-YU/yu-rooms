import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Admin from "../pages/admin/Admin";
import Auth from "@/pages/admin/Auth";
import { Protected } from "./Protected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //Todo: Create Error Page
  },
  {
    path: "/admin",
    element: (
      <Protected>
        <Admin />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Auth />,
  },
]);
