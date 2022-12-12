import Login from "../src/Pages/Login"
import {  Routes, Route } from "react-router-dom";
import MainLecturerDashboard from "./Pages/lecturers_pages/MainLecturerDashboard";
import MainStudentDashboard from "./Pages/students_pages/MainStudentDashboard";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />} >
          <Route path="/*" element={<MainLecturerDashboard />} />
          <Route path="/student-dashboard" element={<MainStudentDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
