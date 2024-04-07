import NavBar from "../NavBar";
import Footer from "../Footer";

const Ongoing = () => {
  return (
      <div className="w-screen">
      <NavBar />
    <div className="w-[465px] h-[671px] flex items-center justify-center flex-col p-10 m-auto">
      <div className="w-[465px] h-[366px]"> 
        <img src="cart.png" alt="No Orders"></img> 
      </div>
      <div>
        <h3 className="font-poppins font-medium text-[25px] text-[#000000] text-center m-2">No Orders have been placed yet</h3>
        <p className="font-poppins font-normal text-[20px] text-[#000000] text-center">All your orders will be saved here for you to access their state</p>
        <button className="bg-[#920100] text-white w-[424px] h-[80px] font-poppins font-medium text-[28px] rounded-lg">Continue Shopping</button>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Ongoing
