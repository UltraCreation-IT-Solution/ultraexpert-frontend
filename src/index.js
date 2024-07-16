import React, { useEffect, lazy, Suspense } from "react";
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
const Favourites = lazy(() => import("./components/Favourites/Favourites.jsx"));
import {
  AllFav,
  FavBlogs,
  FavExperts,
  FavServices,
} from "./components/Favourites/Favourites.jsx";
const Expert = lazy(() => import("./components/Experts/Expert"));
const Service = lazy(() => import("./components/Services/Service"));
const Blog = lazy(() => import("./components/Blogs/Blogs/Blog"));
const CreateBlog = lazy(() => import("./components/Blogs/CreateBlog.jsx"));
const BlogDetails = lazy(() => import("./components/Blogs/BlogDetail.jsx"));
const EditBlog = lazy(() => import("./components/Blogs/EditBlog.jsx"));
const ExpertProfile = lazy(() => import("./components/Experts/ExpertProfile"));
const ServiceDescription = lazy(() =>
  import("./components/Experts/ServiceDescription")
);
const ServiceBooking = lazy(() =>
  import("./components/Experts/ServiceBooking")
);
import Feedback from "./components/Other_Pages/Feedback.jsx";
import Error from "./subsitutes/Error";
import Navbar from "./components/Boundary/Navbar";
import Footer from "./components/Boundary/Footer";
import Test from "./components/GetCertified/Test.jsx";
import ExpertDashboard, {
  Chats,
  Dashboard,
  Leaderboard,
  MyBooking,
  MyServices,
} from "./components/Experts/ExpertDashboard";
const About = lazy(() => import("./components/Other_Pages/About.jsx"));
// import Update from "./components/Experts/EditDashboardProfile";
import SignUpAs from "./components/Auth/SignUpAs";
import SignUpAsExpert from "./components/Auth/SignUpAsExpert";
import SignUpAsCustomer from "./components/Auth/SignUpAsCustomer";
import ForgotPassword from "./components/Auth/ForgotPassword";
import EditProfileExpert from "./components/Auth/EditProfileExpert";
const CreateService = lazy(() => import("./components/Experts/CreateService"));
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
import ExpertProfileShimmer from "./subsitutes/Shimmers/ExpertProfileShimmer.jsx";
import Docs from "./components/UltraXpert_docs/Docs.jsx";
import TestNavbar from "./TestNavbar.jsx";

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
        path: "/docs",
        element:<Docs />
      },
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
        path:"/TestNavbar",
        element: <TestNavbar />

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
            element: (
              <Suspense>
                <Expert />
              </Suspense>
            ),
          },
          {
            path: "expertprofile/:id",
            children: [
              {
                path: "",
                element: (
                  <Suspense fallback={ExpertProfileShimmer()} >
                    <ExpertProfile />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "experts/expertprofile/booking/:id",

        element: (
          <Suspense>
            <ServiceBooking />
          </Suspense>
        ),
      },
      {
        path: "experts/service/:id",
        element: (
          <Suspense>
            <ServiceDescription fallback={ExpertProfileShimmer()} />
          </Suspense>
        ),
      },
      {
        path: "/test/:skill_Name",
        element: <Test />,
      },
      {
        path:"/feedback",
        element:<Feedback/>
      },
      {
        path: "/services",
        element: (
          <Suspense>
            <Service />
          </Suspense>
        ),
      },
      {
        path: "expertdashboard/createService",
        element: (
          <Suspense>
            <CreateService />
          </Suspense>
        ),
      },
      {
        path: "/favourites",
        element: (
          <Suspense>
            <Favourites />
          </Suspense>
        ),

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
            element: (
              <Suspense>
                <Blog />
              </Suspense>
            ),
          },
          {
            path: "createblog",
            element: (
              <Suspense>
                <CreateBlog />
              </Suspense>
            ),
          },
          {
            path: "editblog/:id",
            element: (
              <Suspense>
                <EditBlog />
              </Suspense>
            ),
          },
          {
            path: "blogdetail/:id",
            element: (
              <Suspense>
                <BlogDetails />
              </Suspense>
            ),
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
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "updateservice/:id",
        element: <UpdateService />,
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
