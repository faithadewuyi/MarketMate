import login from '../assets/login.png'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center lg:space-x-4 w-[1305px]'>
     <img src={login} alt="login image" className="hidden lg:block w-[805px] h-[781px] pt-[75px] rounded-tr-lg rounded-lg p-4" />
      <form className="w-full lg:w-1/2 space-y-4">
      <h3 className="text-lg font-bold text-[40px]">Login to exclusive</h3>
      <div>
        <label className="block mb-2 text-[16px] text-textcol">Enter your details below</label>
        <input className="w-[370px] p-2 border rounded-md" placeholder="Email or Phone Number" />
      </div>
      <div>
        <input className="w-[370px] p-2 border rounded-md" placeholder="Password " type="password"/>
      </div>
      <div>
      <button className="w-[143px] h-[56px] bg-mred text-white p-2 rounded-md hover:bg-mred  py-[16px] px-[48px] m-4">Log in</button>
      <Link to="/forgot-password" className="text-mred">
        Forgot Password?
      </Link>
      </div>
    </form>
</div>

  )
}

export default Login
