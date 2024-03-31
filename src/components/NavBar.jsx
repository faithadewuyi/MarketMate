import { FaPhone, FaRegEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <div>
      <header className="hidden bg-darkred text-white w-full lg:flex  justify-between px-4 py-2 fixed top-0 left-0 z-50">
        <div className="flex items-center space-x-4">
          <p className="flex items-center "><FaPhone />(225) 555-0118</p>
          <p className="flex items-center"><FaRegEnvelope />info@marketmate.com</p>
        </div>
        
        <p className="flex-grow text-center">Follow Us and get a chance to win 80% off</p>
        
        <div className="flex items-center space-x-2">
          <FaInstagram />
          <FaYoutube />
          <FaFacebook />
          <FaTwitter />
          <p>Follow Us</p>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
