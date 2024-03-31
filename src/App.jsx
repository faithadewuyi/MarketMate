
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'
import {   Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar'

const App = () => {
  return (
   
    <div>
      
      <NavBar/> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path = "forgot-password" element={<ForgotPassword/>}/>
      </Routes>
       
    </div>
    
  )
}

export default App
