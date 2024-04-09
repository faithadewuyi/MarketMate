import { useForm } from "react-hook-form";
import { useEffect } from "react";
import React from "react";
import InputField from "../components/InputField";

function Profile() {
  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      password: "",
      cpassword: "",
      npassword: "",
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
    <div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
        className="font-poppins shadow-md p-4 pl-6"
      >
        <h1 className="text-darkblue text-[20px] font-medium py-2">
          Edit Your Profile
        </h1>
        <div className="flex gap-[50px] mb-2">
          <InputField
            label="First Name"
            placeholder="Jane"
            id="firstname"
            name="firstname"
            register={register}
            error={errors.firstname}
            pattern={/[A-Za-z0-9]{3,16}$/}
            patternMessage="Name should contain 3-16 characters and shouldn't contain any special characters"
          />
          <InputField
            label="Last Name"
            placeholder="Amokoko"
            id="lastname"
            name="lastname"
            register={register}
            error={errors.lastname}
            pattern={/[A-Za-z0-9]{3,16}$/}
            patternMessage="Name should contain 3-16 characters and shouldn't contain any special characters"
          />
        </div>
        <div className="flex gap-[50px] mb-4">
          <InputField
            label="Email"
            placeholder="jane@mail.com"
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
            label="Address"
            placeholder="Ragnarok"
            id="address"
            name="address"
            type="address"
            register={register}
            error={errors.address}
            pattern={/[A-Za-z0-9]{3,16}$/}
            patternMessage="Enter your address"
          />
        </div>
        <div className="space-y-0.5 my-2">
          <h2 className="text-base">Password changes</h2>
          <InputField
            placeholder="Current password"
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
          <InputField
            placeholder="New Password"
            id="npassword"
            name="npassword"
            type="password"
            register={register}
            error={errors.npassword}
            pattern={
              /^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/
            }
            patternMessage="Password should be 7-16 characters and include at least 1 uppercase letter, 1 number and 1 special character"
          />
          <InputField
            placeholder="Confirm Password"
            id="cpassword"
            name="cpassword"
            type="password"
            register={register}
            error={errors.cpassword}
            pattern={
              /^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/
            }
            patternMessage="Password should be 7-16 characters and include at least 1 uppercase letter, 1 number and 1 special character"
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;
