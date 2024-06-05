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
import Landing from "./components/Landing/Landing";
import Favourites, {
  AllFav,
  FavBlogs,
  FavExperts,
  FavServices,
} from "./components/Favourites/Favourites.jsx";
import Expert from "./components/Experts/Expert";
import Service, { allServiceData } from "./components/Services/Service";
import Blog from "./components/Blogs/Blogs/Blog";
import CreateBlog from "./components/Blogs/CreateBlog.jsx";
import EditBlog from "./components/Blogs/EditBlog.jsx";
import ExpertProfile from "./components/Experts/ExpertProfile";
import ServiceDescription from "./components/Experts/ServiceDescription";
import ServiceBooking from "./components/Experts/ServiceBooking";
import Error from "./subsitutes/Error";
import BlogDetails from "./components/Blogs/BlogDetail";
import Navbar from "./components/Boundary/Navbar";
import Footer from "./components/Boundary/Footer";
import Test from "./components/GetCertified/Test.jsx";
import { expertDetailsObj } from "./constant";
import ExpertDashboard, {
  Chats,
  Dashboard,
  Leaderboard,
  MyBooking,
  MyServices,
} from "./components/Experts/ExpertDashboard";
import About from "./components/Other_Pages/About.jsx";
import Update from "./components/Experts/EditDashboardProfile";
import SignUpAs from "./components/Auth/SignUpAs";
import SignUpAsExpert from "./components/Auth/SignUpAsExpert";
import SignUpAsCustomer from "./components/Auth/SignUpAsCustomer";
import ForgotPassword from "./components/Auth/ForgotPassword";
import EditProfileExpert from "./components/Auth/EditProfileExpert";
import CreateService from "./components/Experts/CreateService";
import CustomerDashboard, {
  CustomerProfile,
  CustomerChats,
  CustomerBookings,
  CustomerRecentMeetngs,
  CustomerTransactionHistory,
} from "./components/Customers/CustomerDashboard.jsx";
import ShowBlogs from "./subsitutes/ShowBlogs.jsx";
import SkillList from "./components/GetCertified/Instructions.js";
import UpdateService from "./components/Services/UpdateService.jsx";
import TestElement from "./TestElement.jsx";

const userId = "user123"; // Replace with actual user ID
const amount = 1000; // Replace with actual amount
const callbackUrl = "/"; // Replace with actual callback URL
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
        path: "/testelement",
        element: <TestElement />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signUpAs",
        children: [
          {
            path: "",
            element: <SignUpAs />,
          },
          {
            path: "expert",
            element: <SignUpAsExpert />,
          },
          {
            path: "customer",
            element: <SignUpAsCustomer />,
          },
        ],
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },

      {
        path: "/loginiwthotp",
        element: <LoginWithOTP />,
      },
      // {
      //   path: "/editprofilecustomer",
      //   element: <EditProfileCustomer />,
      // },
      {
        path: "/editprofileexpert",
        element: <EditProfileExpert />,
      },
      {
        path: "/experts",
        children: [
          {
            path: "",
            element: <Expert />,
          },
          {
            path: "expertprofile/:id",
            children: [
              {
                path: "",
                element: <ExpertProfile />,
              },
            ],
          },
        ],
      },
      {
        path: "experts/expertprofile/booking/:id",
        element: <ServiceBooking />,
      },
      {
        path: "experts/service/:id",
        element: <ServiceDescription />,
      },

      {
        path: "/test/:skill_Name",
        element: <Test />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "expertdashboard/createService",
        element: <CreateService />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
        children: [
          {
            path: "",
            element: <AllFav />,
          },
          {
            path: "favexperts",
            element: <FavExperts />,
          },
          {
            path: "favservices",
            element: <FavServices />,
          },
          {
            path: "favblogs",
            element: <FavBlogs />,
          },
        ],
      },
      {
        path: "/blog",
        children: [
          {
            path: "",
            element: <Blog />,
          },
          {
            path: "createblog",
            element: <CreateBlog />,
          },
          {
            path: "editblog/:id",
            element: <EditBlog />,
          },
          {
            path: "blogdetail/:id",
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
            path: "editprofile",
            element: <EditProfileExpert />,
          },
          {
            path: "myservices",
            element: <MyServices />,
          },
          {
            path: "myservices/service/updateService/:id",
            element: <UpdateService />,
          },
          {
            path: "chats",
            element: <Chats />,
          },
          {
            path: "leaderboard",
            element: <Leaderboard />,
          },
          {
            path: "myBookings",
            element: <MyBooking />,
          },
          {
            path: "getcertified",
            element: <SkillList />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "editprofile",
        element: <Update />,
      },
      {
        path: "customerdashboard",
        element: <CustomerDashboard />,
        children: [
          {
            path: "",
            element: <CustomerProfile />,
          },
          {
            path: "chats",
            element: <CustomerChats />,
          },
          {
            path: "showblogs",
            element: <ShowBlogs />,
          },
          {
            path: "mybookings",
            element: <CustomerBookings />,
          },
          {
            path: "recentmeetings",
            element: <CustomerRecentMeetngs />,
          },
          {
            path: "transactionhistory",
            element: <CustomerTransactionHistory />,
          },
        ],
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<RouterProvider router={appRouter} />);
