import Login from "../src/Pages/Login"
import {  Routes, Route } from "react-router-dom";
import MainLecturerDashboard from "./Pages/lecturers_pages/MainLecturerDashboard";
import MainStudentDashboard from "./Pages/students_pages/MainStudentDashboard";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import useAuth from "./hooks/UseAuth";



function App() {
  const { auth } = useAuth();

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes /> } >
            <Route path="/*" element={
              auth.role === "STUDENT" ? <MainStudentDashboard /> : <MainLecturerDashboard />
            } />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
