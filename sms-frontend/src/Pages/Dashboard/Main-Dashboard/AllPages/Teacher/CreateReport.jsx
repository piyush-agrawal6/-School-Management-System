import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {  CreateReport } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const notify = (text) => toast(text);

const Discharge_and_Create_Slip = () => {
  const { data } = useSelector((store) => store.auth);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const initmark = {
    subject: "",
    score: "",
    total: "",
  };
  const [mark, setmark] = useState(initmark);

  const [marks, setmarks] = useState([]);

  const HandlemarkChange = (e) => {
    setmark({ ...mark, [e.target.name]: e.target.value });
  };

  const InitData = {
    name: "",
    class: "",
    age: "",
    mobile: "",
    email: "",
    gender: "",
    details: "",
    date: "",
    marks: [],
  };

  const [ReportValue, setReportValue] = useState(InitData);

  const HandleReportChange = (e) => {
    setReportValue({ ...ReportValue, [e.target.name]: e.target.value });
  };

  const HandlemarkAdd = (e) => {
    e.preventDefault();
    setmarks([...marks, mark]);
    setmark(initmark);
  };

  const HandleReportSubmit = (e) => {
    e.preventDefault();
    let data = {
      ...ReportValue,
      marks,
    };
    console.log(data);
    try {
      setLoading(true);
      dispatch(CreateReport(data)).then((res) => {
        console.log(res);
        if (res.message === "Report successfully created") {
          notify("Report Created Sucessfully");
          setLoading(false);
          setReportValue(InitData);
        } else {
          setLoading(false);
          notify("Something went Wrong");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (data?.isAuthenticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "teacher") {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Create Report</h1>
            <form>
              <div>
                <label>Student Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={ReportValue.name}
                    onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label>Mobile</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="No"
                    name="mobile"
                    value={ReportValue.mobile}
                    onChange={HandleReportChange}
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
                    value={ReportValue.age}
                    onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc"
                    name="email"
                    value={ReportValue.email}
                    onChange={HandleReportChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Patient Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    value={ReportValue.gender}
                    onChange={HandleReportChange}
                  >
                    <option value="">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Class</label>
                <div className="inputdiv">
                  <select
                    name="class"
                    value={ReportValue.class}
                    onChange={HandleReportChange}
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
                <label>Extra Info</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="details"
                    name="details"
                    value={ReportValue.details}
                    onChange={HandleReportChange}
                  />
                </div>
              </div>
              {/* ******************************************** */}
              <div>
                <label>marks</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="subject"
                    name="subject"
                    value={mark.subject}
                    onChange={HandlemarkChange}
                  />
                  <input
                    type="number"
                    placeholder="mark obtained"
                    name="score"
                    value={mark.score}
                    onChange={HandlemarkChange}
                  />
                  <input
                    type="number"
                    placeholder="total mark"
                    name="total"
                    value={mark.total}
                    onChange={HandlemarkChange}
                  />

                  <input type="submit" value={"Add"} onClick={HandlemarkAdd} />
                </div>
              </div>
              {/* *********************************** */}
              <div>
                <label>Date</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    name="date"
                    value={ReportValue.date}
                    onChange={HandleReportChange}
                  />
                </div>
              </div>

              <button
                className="formsubmitbutton bookingbutton"
                onClick={HandleReportSubmit}
              >
                {loading ? "Loading..." : "Generate Report"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discharge_and_Create_Slip;
