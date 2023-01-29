import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import AddNotice from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddNotice";
import AddAdmin from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddAdmin";
import AddTeacher from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddTeacher";
import AddStudent from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddStudent";
import AllDoubts from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AllDoubts";
import CheckReports from "../Pages/Dashboard/Main-Dashboard/AllPages/Teacher/CheckReports";
import CreateReport from "../Pages/Dashboard/Main-Dashboard/AllPages/Teacher/CreateReport";
import TeacherProfile from "../Pages/Dashboard/Main-Dashboard/AllPages/Teacher/TeacherProfile";
import AddDoubt from "../Pages/Dashboard/Main-Dashboard/AllPages/Student/AddDoubt";
import StudentProfile from "../Pages/Dashboard/Main-Dashboard/AllPages/Student/StudentProfile";
import FrontPage from "../Pages/Dashboard/Main-Dashboard/GlobalFiles/FrontPage";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DLogin />} />
        <Route path="*" element={<FrontPage />} />
        <Route path="/dashboard" element={<FrontPage />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/doubts" element={<AllDoubts />} />
        <Route path="/admin" element={<AddAdmin />} />
        <Route path="/addnotice" element={<AddNotice />} />
        <Route path="/checkreports" element={<CheckReports />} />
        <Route path="/createreport" element={<CreateReport />} />
        <Route path="/teacherprofile" element={<TeacherProfile />} />
        <Route path="/adddoubt" element={<AddDoubt />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
