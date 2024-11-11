import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Admin from "../pages/admin/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //Todo: Create Error Page
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);
