
import Login from './components/Login'
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "login" component={<Login/>}/>
      </Routes>
      <Login/>
    </div>
  )
}

export default App
