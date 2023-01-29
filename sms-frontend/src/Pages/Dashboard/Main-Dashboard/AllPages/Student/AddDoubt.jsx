import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  AddDoubts,
} from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import { Navigate } from "react-router-dom";

const notify = (text) => toast(text);

const AddDoubt = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.auth);

  const InitData = {
    studentID: data?.user._id,
    class: "",
    subject: "",
    teacher: "",
    date: "",
    details: "",
    image: "",
  };
  const [AddDoubt, setAddDoubt] = useState(InitData);

  const HandleAppointment = (e) => {
    setAddDoubt({ ...AddDoubt, [e.target.name]: e.target.value });
  };

  const HandleOnsubmitAppointment = (e) => {
    e.preventDefault();
    if (
      AddDoubt.class === "" ||
      AddDoubt.teacher === "" ||
      AddDoubt.subject === "" ||
      AddDoubt.studentID === "" ||
      AddDoubt.details === ""
    ) {
      return notify("Please Enter All the Requried Feilds");
    }
    setLoading(true);
    console.log(AddDoubt);
    dispatch(AddDoubts(AddDoubt));
    notify("Doubt Asked");
    setLoading(false);
    setAddDoubt(InitData);
  };

  if (data?.isAuthenticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "student") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Ask Doubt</h1>

            <form onSubmit={HandleOnsubmitAppointment}>
              <div>
                <label>Doubt Details</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Details"
                    name="details"
                    value={AddDoubt.details}
                    onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Date</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="date"
                    name="date"
                    value={AddDoubt.date}
                    onChange={HandleAppointment}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Class</label>
                <div className="inputdiv">
                  <select
                    name="class"
                    value={AddDoubt.class}
                    onChange={HandleAppointment}
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Subject</label>
                <div className="inputdiv">
                  <select
                    name="subject"
                    value={AddDoubt.subject}
                    onChange={HandleAppointment}
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
                <label>Teacher</label>
                <div className="inputdiv">
                  <select
                    name="teacher"
                    value={AddDoubt.teacher}
                    onChange={HandleAppointment}
                    required
                  >
                    <option value="">Select teacher</option>
                    <option value="Piyush Agrawal">Piyush Agrawal</option>
                    <option value="Ankit Yadav">Ankit Yadav</option>
                    <option value="Santosh">Santosh</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="formsubmitbutton"
                style={{ width: "20%" }}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoubt;
