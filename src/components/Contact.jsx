
import NavBar from "./NavBar";
import Footer from "./Footer";
const Contact = () => {
  return (
    <div className="w-screen">
    <NavBar/>
        
          <div className="shadow">
          
          <div className="flex items-center  min-h-screen justify-center space-x-4 py-4">
          <div className="flex space-x-2">
          <div className="bg-[#BC2B2A] rounded-full w-[40px] h-[40px] flex justify-center items-center">
            <img src="phone.png" className="w-3/6"></img>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-bold">Call To Us</p>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: (234)800 555-0103</p>
          </div>
          </div>


      {/* Divider */}
      <div className="h-10 w-px bg-[#000000]"></div>

      <div className="flex space-x-2">
          <div className="bg-[#BC2B2A] rounded-full w-[40px] h-[40px] flex justify-center items-center">
            <img src="envelope.png" className="w-3/6"></img>
          </div>
          <div className="flex flex-col justify-start">
            <p className="font-bold">Write To Us</p>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Email: customercare@marketmate.com</p>
            <p>Email: support@marketmate.com</p>
          </div>
          </div>
          </div>
    </div>
   
    <Footer/>
    </div>
  )
}

export default Contact
