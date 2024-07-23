import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BcpSubjects from "./pages/BcpSubjects"
import MyCourses from "./pages/MyCourses"
import Login from "./pages/Login"

const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/BcpSubjects" element={<BcpSubjects/>}/>
      <Route path="/MyCourses" element={<MyCourses/>}/>
      <Route path="/Home" element={<Home/>}/>
        
    </Routes>
  </BrowserRouter>
  )
}
export default App