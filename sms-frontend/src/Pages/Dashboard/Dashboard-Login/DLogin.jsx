import React, { useState } from "react";
import { Radio } from "antd";
import school from "../../../img/school.jpg";
import admin from "../../../img/admin.jpg";
import "./DLogin.scss";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {
  AdminLogin,
  forgetPassword,
  StudentLogin,
  TeacherLogin,
} from "../../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Drawer } from "antd";
const notify = (text) => toast(text);

const DLogin = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // ************************************************
  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("Student");
  const [formvalue, setFormvalue] = useState({
    ID: "",
    password: "",
  });
  const dispatch = useDispatch();

  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };
  const { data } = useSelector((store) => store.auth);

  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (formvalue.ID !== "" && formvalue.password !== "") {
      if (placement === "Student") {
        let data = {
          ...formvalue,
          studentID: formvalue.ID,
        };
        dispatch(StudentLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);
            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Teacher") {
        let data = {
          ...formvalue,
          teacherID: formvalue.ID,
        };
        console.log(data, placement);
        dispatch(TeacherLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);
            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);
            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);
            notify("Something went Wrong, Please Try Again");
          }
        });
      } else if (placement === "Admin") {
        let data = {
          ...formvalue,
          adminID: formvalue.ID,
        };
        dispatch(AdminLogin(data)).then((res) => {
          if (res.message === "Successful") {
            notify("Login Successful");
            setLoading(false);

            return navigate("/dashboard");
          }
          if (res.message === "Wrong credentials") {
            setLoading(false);

            notify("Wrong credentials");
          }
          if (res.message === "Error") {
            setLoading(false);

            notify("Something went Wrong, Please Try Again");
          }
        });
      }
    }
  };

  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  const [ForgetPassword, setForgetPassword] = useState({
    type: "",
    email: "",
  });

  const HandleForgetPassword = (e) => {
    setForgetPassword({ ...ForgetPassword, [e.target.name]: e.target.value });
  };

  const [forgetLoading, setforgetLoading] = useState(false);

  const HandleChangePassword = () => {
    if (ForgetPassword.type === "") {
      return notify("Please Fill all Details");
    }
    console.log(ForgetPassword);
    setforgetLoading(true);
    dispatch(forgetPassword(ForgetPassword)).then((res) => {
      if (res.message === "User not found") {
        setforgetLoading(false);
        return notify("User Not Found");
      }
      setForgetPassword({
        type: "",
        email: "",
      });
      onClose();
      setforgetLoading(false);
      return notify("Account Details Send");
    });
  };

  if (data?.isAuthenticated === true) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="mainLoginPage">
        <div className="leftside">
        <h1>School Management System</h1>
          <img src={school} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Login</h1>
          <div>
            <Radio.Group
              value={placement}
              onChange={placementChange}
              className={"radiogroup"}
            >
              <Radio.Button value="Student" className={"radiobutton"}>
                Student
              </Radio.Button>
              <Radio.Button value="Teacher" className={"radiobutton"}>
                Teacher
              </Radio.Button>
              <Radio.Button value="Admin" className={"radiobutton"}>
                Admin
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            <form onSubmit={HandleSubmit}>
              <h3>{placement} ID</h3>
              <input
                type="number"
                name="ID"
                value={formvalue.ID}
                onChange={Handlechange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={Handlechange}
                required
              />
              <button type="submit">{Loading ? "Loading..." : "Submit"}</button>
              <p style={{ marginTop: "10px" }}>
                Forget Password?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={showDrawer}
                >
                  Get it on Email !
                </span>
              </p>

              {/* ********************************************************* */}
              <Drawer
                title="Forget Password"
                placement="left"
                onClose={onClose}
                open={open}
              >
                <div>
                  <label style={{ fontSize: "18px" }}>Choose Type</label>

                  <select
                    name="type"
                    value={ForgetPassword.type}
                    onChange={HandleForgetPassword}
                    required
                  >
                    <option value="">User Type</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "18px" }}>
                    Enter Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    name="email"
                    value={ForgetPassword.email}
                    onChange={HandleForgetPassword}
                    required
                    style={{
                      width: "100%",
                      height: "3rem",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#bce0fb",
                      fontSize: "18px",
                      marginTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                </div>

                <button
                  style={{
                    width: "50%",
                    margin: " 20px auto",
                    display: "flex",
                    padding: "10px",
                    fontSize: "18px",
                    backgroundColor: "rgba(187, 226, 255, 0.874)",
                    border: "none",
                    borderRadius: "7px",
                    cursor: "pointer",
                    justifyContent: "center",
                  }}
                  onClick={HandleChangePassword}
                >
                  {forgetLoading ? "Loading..." : " Send Mail"}
                </button>
              </Drawer>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DLogin;
