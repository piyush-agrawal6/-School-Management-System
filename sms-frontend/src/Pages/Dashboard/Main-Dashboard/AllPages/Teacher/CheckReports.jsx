import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { DeleteReports, GetAllReport } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";

const Check_Appointment = () => {
  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const AllAppointment = useSelector((state) => state.data.reports);

  console.log(AllAppointment);

  const DeleteReport = (id) => {
    dispatch(DeleteReports(id));
  };
  useEffect(() => {
    if (data?.user.userType === "student") {
      dispatch(GetAllReport());
    } else {
      dispatch(GetAllReport({ email: data?.user.email }));
    }
  }, [dispatch, data]);

  if (data?.isAuthenticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType === "admin") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>Reports</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {AllAppointment?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.name}</td>
                        <td>{ele.class}</td>
                        <td>{ele.email}</td>
                        <td>{ele.date}</td>
                        <td>
                          <button
                            style={{
                              border: "none",
                              color: "red",
                              outline: "none",
                              background: "transparent",
                              cursor: "pointer",
                            }}
                            onClick={() => DeleteReport(ele._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check_Appointment;
