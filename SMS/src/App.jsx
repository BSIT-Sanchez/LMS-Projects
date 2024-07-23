import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Admin from "./components/userInformation/Admin"
import Teachers from "./components/userInformation/Teachers"
import Students from "./components/userInformation/Students"
import OnlyStudentPrivateRoute from "./components/OnlyStudentPrivateRoute"
import StudentDashboard from "./pages/Student/StudentDashboard"
import SmsProfile from "./pages/Student/SmsProfile"
import ModuleGrant from "./pages/Student/ModuleGrant"
import Permit from "./pages/Student/Permit"
import Enrollment from "./pages/Student/Enrollment"
import AccountStatement from "./pages/Student/AccountStatement"
import Scholarship from "./pages/Student/Scholarship"
import LmsSubjects from "./pages/Student/LmsSubjects"
import Concerns from "./pages/Student/Concerns"
import Appointment from "./pages/Student/Appointment"
import Events from "./pages/Student/Events"
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute"
import Announcement from "./pages/Admin/Announcement"
import Programs from "./pages/Admin/Programs"
import UpdateAnnouncement from "./pages/Admin/UpdateAnnouncement"


const App = () => {

  return(
  <BrowserRouter>
    <Routes>

        <Route path="/" element={<Login/>}/>
        <Route  path="/Dashboard" element={<Dashboard/>}/>


        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route  path="/Users" element={<Users/>}/>
          <Route path="/Users/userInfomation" element={<Admin/>}/>
          <Route path="/Users/teachersInfomation" element={<Teachers/>}/>
          <Route path="/Users/studentsInfomation" element={<Students/>}/>
          <Route path="/update-announcement/:announcementId" element={<UpdateAnnouncement/>}/>
          <Route path= "Programs" element={<Programs/>}/>
          <Route path= "Announcement" element={<Announcement/>}/>
        </Route>
            

      <Route element={<OnlyStudentPrivateRoute/>}>
        <Route path="/StudentDashboard" element={<StudentDashboard/>}/>\
        <Route path="/SmsProfile" element={<SmsProfile/>}/>
        <Route path="/ModuleGrant" element={<ModuleGrant/>}/>
        <Route path="/Permit" element={<Permit/>}/>
        <Route path="/Enrollment" element={<Enrollment/>}/>
        <Route path="/AccountStatement" element={<AccountStatement/>}/>
        <Route path="/Scholarship" element={<Scholarship/>}/>
        <Route path="/LmsSubjects" element={<LmsSubjects/>}/>
        <Route path="/Concerns" element={<Concerns/>}/>
        <Route path="/Appoinment" element={<Appointment/>}/>
        <Route path="/Events" element={<Events/>}/>
      </Route>


    </Routes>
  </BrowserRouter>
  )
}
export default App