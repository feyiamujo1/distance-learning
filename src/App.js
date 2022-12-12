import Login from "../src/Pages/Login"
import {  Routes, Route } from "react-router-dom";
import MainLecturerDashboard from "./Pages/lecturers_pages/MainLecturerDashboard";
import MainStudentDashboard from "./Pages/students_pages/MainStudentDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<MainLecturerDashboard />} />
        <Route path="/student-dashboard" element={<MainStudentDashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
