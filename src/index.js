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
import Service from "./components/Services/Service";
import Blog from "./components/Blogs/Blogs/Blog";
import CreateBlog from "./components/Blogs/CreateBlog.jsx";
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
  MyBookings,
} from "./components/Experts/ExpertDashboard";
import About from "./components/Other_Pages/About.jsx";
import Update from "./components/Experts/EditDashboardProfile";
import SignUpAs from "./components/Auth/SignUpAs";
import SignUpAsExpert from "./components/Auth/SignUpAsExpert";
import SignUpAsCustomer from "./components/Auth/SignUpAsCustomer";
import ForgotPassword from "./components/Auth/ForgotPassword";
import EditProfileCustomer from "./components/Auth/EditProfileCustomer";
import EditProfileExpert from "./components/Auth/EditProfileExpert";
import CreateService from "./components/Experts/CreateService";
import CustomerDashboard, {
  CustomerProfile,
  CustomerChats,
  CustomerBookings,
  CustomerRecentMeetngs,
  CustomerTransactionHistory,
} from "./components/Customers/CustomerDashboard.jsx";
import TestElement from "./TestElement.jsx";
import FirebaseImageUpload from "./components/firebase/FirebaseImageUpload.js";
import ShowBlogs from "./subsitutes/ShowBlogs.jsx";
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
      {
        path: "/editprofilecustomer",
        element: <EditProfileCustomer />,
      },
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
            path: "editprofile",
            element: <EditProfileExpert />,
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
            path: "mybookings",
            element: <MyBookings />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/testelement",
        element: <TestElement />,
      },
      {
        path: "/firebaseuploadtest",
        element: <FirebaseImageUpload />,
      },
      {
        path: "/test",
        element: <Test />,
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
            path:"showblogs",
            element:<ShowBlogs/>
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
