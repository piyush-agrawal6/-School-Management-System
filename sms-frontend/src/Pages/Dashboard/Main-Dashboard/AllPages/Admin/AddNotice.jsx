import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../GlobalFiles/Sidebar";
import { AddNotice } from "../../../../../Redux/Datas/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);

const AddBeds = () => {
  const { data } = useSelector((store) => store.auth);

  const InitData = {
    title: "",
    details: "",
    date: "",
  };
  const [NoticeData, setNoticeData] = useState(InitData);

  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const HandleNoticeChange = (e) => {
    setNoticeData({
      ...NoticeData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleNoticeSubmit = (e) => {
    e.preventDefault();
    console.log(NoticeData);
    setloading(true);
    dispatch(AddNotice(NoticeData));
    setloading(false);
    setNoticeData(InitData);
    notify("Notice  Added");
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
          <div className="mainAmbupance">
            <h1>Add Notice</h1>

            <form onSubmit={HandleNoticeSubmit}>
              <div>
                <label>Title</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    name="title"
                    value={NoticeData.title}
                    onChange={HandleNoticeChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Details</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    name="details"
                    value={NoticeData.details}
                    onChange={HandleNoticeChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Date</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    name="date"
                    value={NoticeData.date}
                    onChange={HandleNoticeChange}
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

export default AddBeds;
