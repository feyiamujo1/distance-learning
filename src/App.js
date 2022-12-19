import Login from "../src/Pages/Login"
import {  Routes, Route } from "react-router-dom";
import MainLecturerDashboard from "./Pages/lecturers_pages/MainLecturerDashboard";
import MainStudentDashboard from "./Pages/students_pages/MainStudentDashboard";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <div>
      {/* <AuthProvider> */}
      <Routes>
        <Route path="/login" element={<Login />} />
          {/* <Route element={<ProtectedRoutes />} >
            <Route path="/*" element={<MainStudentDashboard />} />
              <Route path="/*" element={<MainLecturerDashboard />} />
          </Route> */}
      </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
