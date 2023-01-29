import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { deleteDoubt, GetDoubts } from "../../../../../Redux/Datas/action";
import Sidebar from "../../GlobalFiles/Sidebar";

const Beds_Rooms = () => {
  const { data } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const beds = useSelector((state) => state.data.doubts);

  const DeleteDoubt = (_id) => {
    dispatch(deleteDoubt(_id));
  };
  const {
    data: { user },
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user?.userType === "nurse") {
      dispatch(GetDoubts({ studentID: user?._id }));
    } else {
      dispatch(GetDoubts());
    }
  }, [dispatch, user]);

  if (data?.isAuthenticated === false) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Payment_Page">
            <h1 style={{ marginBottom: "2rem" }}>Doubts</h1>
            <div className="patientBox">
              <table>
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Details</th>
                    <th>Date</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {beds?.map((ele) => {
                    return (
                      <tr>
                        <td>{ele.class}</td>
                        <td style={{ marginLeft: "1rem" }}>{ele.subject}</td>
                        <td
                          style={{
                            color:
                              ele.occupied === "available" ? "green" : "orange",
                            fontWeight: "bold",
                          }}
                        >
                          {ele.teacher}
                        </td>
                        <td>{ele.details}</td>
                        <td>{ele.date}</td>
                        <td
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => DeleteDoubt(ele._id)}
                        >
                          Delete
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

export default Beds_Rooms;
