

const Ongoing = () => {
  return (
    <div className="w-[465px] h-[671px] flex items-center justify-center flex-col p-10 m-auto md:w-[272px] md:h-[42px]">
    <div className="w-[465px] h-[366px] md:mr-4">
    <img src="orders.png"></img> 
    </div>
   <div>
   <h3 className="font-poppins font-medium text-[25px] text-[#000000] text-align m-2">No Orders have been placed yet</h3>
   <p className="font-poppins font-normal text-[20px] text-[#000000] text-center">All your orders will be saved here for you to access their state</p>
   <button className="bg-[#920100] text-white w-[424px] h-[80px] md:[332px]  text-poppins font-medium text-[28px] rounded-lg">Continue Shopping</button>
   </div>
   </div>
  )
}

export default Ongoing
