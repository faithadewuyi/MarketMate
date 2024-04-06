import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

import ContactComponent from "./components/ScreenSizes/ContactComponent";
import Profile from "./components/Profile/Profile";
import Ongoing from "./components/Profile/Ongoing";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<ContactComponent/>} />
        <Route path="/profile-orders" element={<Profile/>} />
        <Route path="/ongoing-orders" element={<Ongoing/>} />
       

      </Routes>
    </div>
  );
};

export default App;
