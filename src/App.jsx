import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

import Signup from "./components/Signup"
import ContactComponent from "./components/ScreenSizes/ContactComponent";
import ErrorPage from "./pages/ErrorPage";
import Account from "./components/Account";
import Ongoing from "./components/Profile/Ongoing";
import ReturnedOrders from "./components/Profile/ReturnedOrders";


const App = () => {
  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/ongoing-order" element={ <Ongoing />} />
        <Route path="/returned-order" element={ <ReturnedOrders />} />

      </Routes>
    </div>
  );
};

export default App;
