import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";

function Account() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  return (
    <div className="w-full overflow-x-hidden">
      <NavBar />
      <div className="flex justify-between w-5/6 mx-auto">
        <div className="flex">
          <p className="px-2 text-sm">Home</p>/
          <p className="px-2 text-terblue">My Account</p>
        </div>
        <h2>
          Welcome <span className="text-primaryred">Jane</span>
        </h2>
      </div>
      <div className="flex flex-row w-5/6 mx-auto my-4 h-full">
        <div className="basis-full lg:basis-1/4 flex flex-col font-poppins">
          <div className="pt-6 gap-0.5">
            <div className="relative w-[82px] h-[82px] mx-3">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                alt="random user"
                className="h-20 w-20 rounded-full"
              />
              <button className="absolute bottom-0 right-0">
                <img
                  src="./Icon Box.png"
                  alt="camera icon"
                  className="h-4 w-4"
                />
              </button>
            </div>
            <h3 className="text-[20px] font-semibold py-2">
              {name || "Jane Amokoko"}
            </h3>
          </div>
          <div className="py-[10px] gap-2 text-base font-normal">
            <div>
              <h3 className="text-terblue font-medium pb-0.5">
                Manage my Account
              </h3>
              <ul className="px-3 space-y-0.5">
                <li>
                  <a href="#" className="hover:text-primaryred">
                    My Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primaryred">
                    Billing Address
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primaryred">
                    Payment Details
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="text-terblue font-medium pb-0.5">My Orders</h3>
              <ul className="px-3 space-y-0.5">
                <li>
                  <a href="#" className="hover:text-primaryred">
                    Ongoing/Delivered
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primaryred">
                    Returns/Cancellations
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="text-terblue font-medium pb-0.5">My Store</h3>
              <ul className="px-3 space-y-0.5">
                <li>
                  <a href="#" className="hover:text-primaryred">
                    Catalog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primaryred">
                    My Advert
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primaryred">
                    Performance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className="text-primaryred text-left">Delete Account</button>
        </div>
        <div className="hidden lg:block lg:basis-3/4">
          <Routes>
            <Route path="/" element={<Profile />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Account;
