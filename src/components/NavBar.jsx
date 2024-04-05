import {
  FaPhone,
  FaRegEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-screen z-50">
      <header className="hidden bg-darkred text-white w-full lg:flex  px-4 py-2 left-0  ">
        <div className="w-5/6 flex items-center mx-auto justify-between">
          <div className="flex items-center space-x-4">
            <p className="flex items-center ">
              <FaPhone />
              (225) 555-0118
            </p>
            <p className="flex items-center">
              <FaRegEnvelope />
              info@marketmate.com
            </p>
          </div>

          <p className="flex-grow text-center">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="flex items-center space-x-2">
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
            <p>Follow Us</p>
          </div>
        </div>
      </header>

      <nav className=" bg-white mb-8 py-4  justify-center">
        <div className="w-5/6 flex items-center mx-auto justify-between">
          <div className="flex ">
            <button className="md:hidden mr-1">
              <img src="./menu.png" alt="menu bar icon" />
            </button>
            <img src="Logo.png" alt="Market mate Logo" />
            <h1 className="font-lobstertwo text-primaryred text-3xl md:text-4xl">
              MarketMate
            </h1>
          </div>
          <div className="hidden md:flex flex-row  space-x-3 text-gray font-poppins text-xs font-bold">
            <button>Home</button>
            <div className="flex">
              <button>Shop</button>
              <span className="material-symbols-outlined">expand_more</span>
            </div>
            <button>About</button>
            <button>Contact</button>
            <button>Pages</button>
          </div>
          <div className="flex flex-row md:space-x-3 justify-end text-gray font-poppins text-xs font-light">
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="hidden md:block material-symbols-outlined">
              favorite
            </span>
            <div className="flex flex-row text-secblue font-bold">
              <span className="material-symbols-outlined">person</span>
              <div className="hidden md:flex pt-0.5">
                <button className="px-0.2">Login</button>/
                <button className="px-0.2 ">Register</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
