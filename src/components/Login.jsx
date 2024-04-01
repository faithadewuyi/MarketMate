
import login from "../assets/login.png";
import { Link } from "react-router-dom";
import google from "../assets/google.svg";

const Login = () => {
 
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-4 w-[1305px] mt-6">
      <img
        src={login}
        alt="login image"
        className="hidden lg:block w-[805px] h-[781px] pt-[75px] rounded-tr-lg rounded-lg p-4"
      />
      <form className="w-full lg:w-1/2 space-y-4 md: p-5 align-center ">
        <h2 className=" md: hidden lg:block lg:text-[38px] h-[58px] font-catamara text-[] ">
          Login to MarketMate
        </h2>
        <h3 className="lg:hidden md: w-[299px] text-[38px] ">
          Log in to{" "}
          <span className="text-mred font-bold font-lobstertwo">MarketMate</span>
        </h3>
        <div>
          <p className="block mb-2 lg:text-[16px] text-textcol font-poppins">
            Enter your details below
          </p>
          <input
            className="w-[370px] p-2 border rounded-md"
            placeholder="Email or Phone Number"
          />
        </div>
        <div>
          <input
            className="w-[370px] p-2 border rounded-md"
            placeholder="Password "
            type="password"
          />
        </div>
        <div>
          <button className="w-[143px] h-[56px] bg-mred text-white p-2 rounded-md hover:bg-mred  py-[16px] px-[48px] m-4">
            Log in
          </button>
          <Link to="/forgot-password" className="text-mred">
            Forgot Password?
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center  font-medium text-gray-800 border rounded-lg bg-white hover:bg-gray-100 lg:w-[365px] lg: h-[56px]  gap-2 py-2 px-10"
        >
          <img src={google} alt="Google logo" className=" w-2 h-5 " />
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
