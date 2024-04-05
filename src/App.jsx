import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import ContactComponent from "./components/ContactComponent";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
