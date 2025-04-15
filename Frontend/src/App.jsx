import "./App.css";
import Home from "./page/home";
import Cart from "./page/cart";
import Myaccount from "./page/myAccount";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./page/Product";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Noticebar from "./components/Noticebar";
import Login from "./page/Login";
import Register from "./page/Register";
import ProductList from "./page/ProductList";
import Order from "./page/Order";


function App() {
  const Layout = () => {
    return (
      <div>
        <Noticebar />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/myaccount",
          element: <Myaccount />
        },
        {
          path: "/product/:productId",
          element: <Product />
        },
        {
          path: "/products/:searchterm",
          element: <ProductList />
        },
        {
          path: "/myorders",
          element: <Order />
        }
        
      ]
    },
 
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
