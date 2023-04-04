import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Root from "./Root";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import Protected from "./components/protectedRoute/Protected";
import ProtectedProfile from "./components/protectedRoute/ProtectedProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products/:productId",
        element: <Product />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedProfile>
            <Profile />
          </ProtectedProfile>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Protected>
        <Login />
      </Protected>
    ),
  },
  {
    path: "/signup",
    element: (
      <Protected>
        <Signup />
      </Protected>
    ),
  },
]);
