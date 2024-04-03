import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
};

export default App;
