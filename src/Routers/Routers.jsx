import { createBrowserRouter } from "react-router-dom";
import Layout from './../Layout/Layout';
import Home from "../Page/Home";
import SinglePage from "../Page/SinglePage";
import Card from "@/Page/Card";
import ShopPage from "@/Page/ShopPage";
import Profile from "@/Page/Profile";
import OrderPage from "@/Page/OrderPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/single-page",
        element: <SinglePage></SinglePage>,
      },
      {
        path: "/card",
        element: <Card></Card>,
      },
      {
        path: "/shop-page",
        element: <ShopPage></ShopPage>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/order-page",
        element: <OrderPage></OrderPage>,
      }
    ],
  },
]);