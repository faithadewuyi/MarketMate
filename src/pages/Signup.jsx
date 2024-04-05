import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputField from "../components/InputField";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Signup() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, reset, formState } = form;
  const { errors, isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = (data) => {
    console.log("submitted", data);
  };

  const onError = (errors) => {
    console.log("Form Errors", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="w-screen">
      <NavBar />
      <div className="flex flex-col justify-center mx-auto lg:flex-row lg:justify-between items-center lg:space-x-4 mt-6">
        <img
          src="./login.png"
          alt="signup image"
          className="hidden md:block w-[755px] h-[700px] pt-[75px] rounded-tr-lg rounded-lg p-4"
        />
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
          className="w-full lg:w-1/2 md:p-5 flex flex-col items-center justify-center"
        >
          <h3 className="lg:block lg:text-[38px] font-catamaran text-black font-bold">
            Create an account
          </h3>
          <p className="font-poppins text-[16px] font-normal items-start py-1">
            Enter your details below
          </p>
          <div className="space-y-1">
            <InputField
              placeholder="Name"
              id="name"
              name="name"
              register={register}
              error={errors.name}
              pattern={/[A-Za-z0-9]{3,16}$/}
              patternMessage="Name should contain 3-16 characters and shouldn't contain any special characters"
            />
            <InputField
              placeholder="Email or Phone Number"
              id="email"
              name="email"
              type="email"
              register={register}
              error={errors.email}
              pattern={
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              }
              patternMessage="Please enter a valid email address"
            />
            <InputField
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              register={register}
              error={errors.password}
              pattern={
                /^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/
              }
              patternMessage="Password should be 7-16 characters and include at least 1 uppercase letter, 1 number and 1 special character"
            />
          </div>
          <button
            disabled={isSubmitting}
            className="bg-mred text-white p-2 rounded-md hover:bg-mred  py-[16px] px-[48px] my-3 font-poppins w-[270px]"
          >
            Create Account
          </button>

          <button
            type="button"
            className="flex items-center font-medium text-gray-800 border rounded-lg bg-white hover:bg-gray-100 lg:w-[270px] lg: h-[56px]  gap-2 py-2 px-8"
          >
            <img src="./google.svg" alt="Google logo" className=" w-2 h-5 " />
            Sign in with Google
          </button>
          <div className="flex flex-row space-x-1 pt-2">
            <p>Already have account?</p>
            <Link
              to="/"
              className="text-textcol text-[16px] font-poppins border-b border-textcol"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
