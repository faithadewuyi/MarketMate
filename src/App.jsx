import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import About from "./components/About";
import ContactComponent from "./components/ScreenSizes/ContactComponent";
import Ongoing from "./components/Profile/Ongoing";
import ReturnedOrders from "./components/Profile/ReturnedOrders";

const App = () => {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactComponent/>} />
        <Route path="/ongoing-order" element={<Ongoing/>} />
        <Route path="/returned-order" element={<ReturnedOrders/>} />
      </Routes>
    </div>
  );
};

export default App;
