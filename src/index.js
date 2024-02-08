import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import "./global.css";
import LogIn from "../src/components/Auth/Login/Log-In";
import Register from "../src/components/Auth/Register/Register";
import Landing from "./components/Landing/Landing";
import Expert from "./components/Experts/Expert";
import Service from "./components/Services/Service";
import Blog from "./components/Blogs/Blogs/Blog";
import ExpertProfile from "./components/Experts/ExpertProfile";
import ServiceDescription from "./components/Experts/ServiceDescription";
import ServiceBooking from "./components/Experts/ServiceBooking";
import Error from "./subsitutes/Error";
import BlogDetails from "./components/Blogs/BlogDetail";
import Navbar from "./components/Boundary/Navbar";
import Footer from "./components/Boundary/Footer";

const Layout = () => {
  const action = useNavigationType();
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/experts",
        children: [
          {
            path: "",
            element: <Expert />,
          },
          {
            path: "expertprofile",
            children: [
              {
                path: "",
                element: <ExpertProfile />,
              },
              {
                path: "service",
                element: <ServiceDescription />,
              },
              {
                path: "booking",
                element: <ServiceBooking />,
              },
            ],
          },
        ],
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/blog",
        children: [
          {
            path: "",
            element: <Blog />,
          },
          {
            path: "blogdetail",
            element: <BlogDetails />,
          },
        ],
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterProvider router={appRouter} />);
