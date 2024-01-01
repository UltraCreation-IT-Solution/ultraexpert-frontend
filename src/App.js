import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Link,
} from "react-router-dom";
import LogIn from "../src/components/Auth/Login/Log-In";
import Register from "../src/components/Auth/Register/Register";
import Landing from "./components/Landing/Landing";

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
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
export default App;
