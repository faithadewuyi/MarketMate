

const ForgotPassword = () => {
  return (
    <div className="items-center  bg-gray min-h-screen flex justify-center">
      <div className="bg-white p-8  shadow-lg max-w-md mx-auto">
     <h2 className="font-catamara text-secblue text-[45px] w-[534px]">Forgot Password</h2>
     <p className="font-poppins text-gray text-[16px]">Enter your email for the verification proccess,we will send 4 digits code to your email.</p>
     <label>Email</label>
     <input placeholder="Enter email"/>
     <button className="bg-darkblue w-[300px] text-white">Continue</button>
    </div>
    </div>
  )
}

export default ForgotPassword
