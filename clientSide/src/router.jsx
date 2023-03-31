import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";
import Categorie from "./pages/Categorie";
import Home from "./pages/Home";
import Root from "./Root";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

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
        path: "/categories/:categorieId",
        element: <Categorie />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
