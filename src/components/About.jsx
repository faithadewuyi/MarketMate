import Footer from "./Footer"
import NavBar from "./NavBar"

const About = () => {
  return (
    <div className="w-screen">
      <NavBar />
     <div className="min-h-screen"> 
     <div className="  w-[1440px] h-[8388px] ">
      <div className="mx-auto text-center space-y-16 bg-[#0E2744] w-full">
      
      <p className="text-[40px] font-catamaran text-black">Discover, Connect and Thirve in Our Marketplace</p>
      <h1 className="font-catamaran font-bold text-[52px] text-white">Find the Perfect Service</h1>
      <p className="text-[40px] font-catamaran text-white">Discover, Connect and Thirve in Our Marketplace</p>
      <button>Learn More</button>
      <button>Get Started</button>
      </div> 
      </div>
     </div> 
    <Footer/>
    </div>
  )
}

export default About
