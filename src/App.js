import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Error from "./substitutes/Error";
import LogIn from "../src/components/Auth/Login/Log-In";
import Register from "../src/components/Auth/Register/Register";
import Landing from "./components/Landing/Landing";
import Expert from "./components/Experts/Expert";
import ExpertProfile from "./components/Experts/ExpertProfile";
import ServiceDescription from "./components/Experts/ServiceDescription";
import ServiceBooking from "./components/Experts/ServiceBooking";
import BlogDetails from "./components/Blogs/BlogDetails";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return (
    <>
      <Routes>

        <Route path="*" element={<Error />}/>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogDetails" element={<BlogDetails/>} />
        <Route path="/experts" element={<Expert />} />
        <Route path="/experts/expertProfile" element={<ExpertProfile />} />
        <Route
          path="/experts/expertProfile/service"
          element={<ServiceDescription />}
        />
        <Route
          path="/experts/expertProfile/booking"
          element={<ServiceBooking />}
        />
      </Routes>
    </>
  );
}
export default App;
