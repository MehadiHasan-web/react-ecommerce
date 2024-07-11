import { createBrowserRouter } from "react-router-dom";
import Layout from './../Layout/Layout';
import Home from "../Page/Home";
import SinglePage from "../Page/SinglePage";
import Card from "@/Page/Card";


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
    ],
  },
]);