import "./App.css";
import Home from "./page/home";
import Cart from "./page/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./page/Product";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Noticebar from "./components/Noticebar";
import Login from "./page/Login";
import Register from "./page/Register";
import ProductList from "./page/ProductList";
import Order from "./page/Order";
import QuizPage from "./page/QuizPage";
import About from "./page/About";
import Myaccount from "./page/Myaccount";
import { useSelector } from "react-redux";
import OrderSuccess from "./page/OrderSucess";
import OrderFailure from "./page/OrderFailure";


function App() {
  const user = useSelector((state) => state.user);

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
          element: user?.currentUser ? <Myaccount /> : <Home />
        },
        {
          path: "/product/:productId",
          element: <Product />
        },        
        {
          path: "/allproducts",
          element: <ProductList />
        },
        {
          path: "/products/:searchterm",
          element: <ProductList />
        },
        {
          path: "/myorders",
          element: user?.currentUser ? <Order /> : <Login />
        },
        {
          path: "/skintypequiz",
          element: <QuizPage />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/order/success", // Define the success route
          element: <OrderSuccess />
        },
        {
          path: "/order/failure", // Define the failure route
          element: <OrderFailure />
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
