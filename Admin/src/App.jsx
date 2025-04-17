import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Banners from "./pages/Banners";
import AddProduct from "./pages/AddProduct";
import Product from "./pages/Product";

const App = () => {
  const Layout = () => {
    return (
      <div className="flex min-h-screen">
        <div className="w-[350px]">
          <Menu />
        </div>
        <div className="flex-1 p-6 bg-gray-200">
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/banners",
          element: <Banners />,
        },
        {
          path: "/addproduct",
          element: <AddProduct />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
