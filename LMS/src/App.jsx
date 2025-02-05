import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BcpSubjects from "./pages/BcpSubjects"
import MyCourses from "./pages/MyCourses"
import Login from "./pages/Login"
import SubjectDetail from "./pages/SubjectDetail"

const App = () => {
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/BcpSubjects" element={<BcpSubjects/>}/>
      <Route path="/MyCourses" element={<MyCourses/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/subject/:id" element={<SubjectDetail />} />
        
    </Routes>
  </BrowserRouter>
  )
}
export default App