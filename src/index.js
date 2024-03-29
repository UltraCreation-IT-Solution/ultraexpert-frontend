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
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import LoginWithOTP from "./components/Auth/LoginWithOTP";
import SentOTP from "./components/Auth/SentOTP";
import Landing from "./components/Landing/Landing";
import Expert from "./components/Experts/Expert";
import Service from "./components/Services/Service";
import Blog, { BlogBody, SearchBlog } from "./components/Blogs/Blogs/Blog";
import ExpertProfile from "./components/Experts/ExpertProfile";
import ServiceDescription from "./components/Experts/ServiceDescription";
import ServiceBooking from "./components/Experts/ServiceBooking";
import Error from "./subsitutes/Error";
import BlogDetails from "./components/Blogs/BlogDetail";
import Navbar from "./components/Boundary/Navbar";
import Footer from "./components/Boundary/Footer";
import AllExperts from "./Test";
import { expertDetailsObj } from "./constant";
import ExpertDashboard, {
  Chats,
  Dashboard,
  Leaderboard,
} from "./components/Experts/ExpertDashboard";
import Update from "./components/Experts/EditDashboardProfile";
import VerifySignUp from "./components/Auth/VerifySignUp";

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
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/loginiwthotp",
        element: <LoginWithOTP />,
      },
      {
        path: "/sentOTP",
        element: <SentOTP />,
      },
      {
        path: "/verifySignUp",
        element: <VerifySignUp />,
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
                path: "service/:id",
                element: <ServiceDescription {...expertDetailsObj} />,
              },
              {
                path: "booking/:id",
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
      {
        path: "/expertdashboard",
        element: <ExpertDashboard />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "chats",
            element: <Chats />,
          },
          {
            path: "leaderboard",
            element: <Leaderboard />,
          },
        ],
      },
      {
        path: "/test",
        element: <AllExperts />,
      },
      {
        path: "editprofile",
        element: <Update />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterProvider router={appRouter} />);
