import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Admin from "./components/userInformation/Admin"
import Teachers from "./components/userInformation/Teachers"
import Students from "./components/userInformation/Students"

const App = () => {

  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route  path="/Dashboard" element={<Dashboard/>}/>
      <Route  path="/Users" element={<Users/>}/>
      <Route path="/Users/adminInfomation" element={<Admin/>}/>
      <Route path="/Users/teachersInfomation" element={<Teachers/>}/>
      <Route path="/Users/studentsInfomation" element={<Students/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App