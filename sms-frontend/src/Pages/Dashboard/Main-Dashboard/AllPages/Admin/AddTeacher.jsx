import React, { useState } from "react";
import "./CSS/AddTeacher.scss";
import "./CSS/AddBed.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  SendPassword,
  TeacherRegister,
} from "../../../../../Redux/auth/action";
import Sidebar from "../../GlobalFiles/Sidebar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);

const AddDoctor = () => {
  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const initData = {
    teacherName: "",
    age: "",
    mobile: "",
    email: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    subject: "",
    teacherID: Date.now(),
    password: "",
    details: "",
  };
  const [TeacherValue, setTeacherValue] = useState(initData);

  const HandleDoctorChange = (e) => {
    setTeacherValue({ ...TeacherValue, [e.target.name]: e.target.value });
  };

  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(TeacherRegister(TeacherValue)).then((res) => {
      console.log(res);
      if (res.message === "Teacher already exists") {
        setLoading(false);
        return notify("Teacher Already Exist");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Something went wrong, Please try Again");
      }
      let data = {
        email: res.data.email,
        password: res.data.password,
        userId: res.data.teacherID,
      };
      console.log(data);
      dispatch(SendPassword(data)).then(() => notify("Account Details Sent"));
      setLoading(false);
      // setTeacherValue(initData);
    });
  };

  if (data?.isAuthenticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Add Teacher</h1>
            <form onSubmit={HandleDoctorSubmit}>
              <div>
                <label>Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="teacherName"
                    value={TeacherValue.teacherName}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={TeacherValue.age}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Emergency Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Emergency Number"
                    name="mobile"
                    value={TeacherValue.mobile}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc.com"
                    name="email"
                    value={TeacherValue.email}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    value={TeacherValue.gender}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Subject</label>
                <div className="inputdiv">
                  <select
                    name="subject"
                    value={TeacherValue.subject}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="">Select subject</option>
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="sst">Social Science</option>
                    <option value="english">English</option>
                    <option value="general">General</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Birth date</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    name="DOB"
                    value={TeacherValue.DOB}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={TeacherValue.address}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Education</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="eg.MBBS"
                    name="education"
                    value={TeacherValue.education}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Password</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={TeacherValue.password}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Other Details</label>
                <div className="inputdiv">
                  <textarea
                    type="text"
                    placeholder="Extra Info"
                    rows="4"
                    cols="50"
                    name="details"
                    value={TeacherValue.details}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="formsubmitbutton">
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
