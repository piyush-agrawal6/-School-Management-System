import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { SlUserFollow } from "react-icons/sl";
import {
  BsPatchQuestionFill,
  BsFillBookmarkCheckFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { MdDashboardCustomize, MdQuiz } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "./CommonCSS.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    data: { user },
  } = useSelector((state) => state.auth);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div>
        <div style={{ width: isOpen ? "200px" : "70px" }} className={`sidebar`}>
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              SMS
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <ImMenu onClick={toggle} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="bottomSection">
            <Link className="link" activeclassname="active" to={"/dashboard"}>
              <div className="icon">
                <MdDashboardCustomize className="mainIcon" />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                DashBoard
              </div>
            </Link>

            {user?.userType === "student" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/studentprofile"}
              >
                <div className="icon">
                  <CgProfile className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null}
            {user?.userType === "student" ? (
              <Link className="link" activeclassname="active" to={"/adddoubt"}>
                <div className="icon">
                  <BsPatchQuestionFill className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Ask Doubt
                </div>
              </Link>
            ) : null}

            {user?.userType === "admin" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/addteacher"}
              >
                <div className="icon">
                  <FaChalkboardTeacher className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Teacher
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/addstudent"}
              >
                <div className="icon">
                  <AiOutlineUserAdd className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Student
                </div>
              </Link>
            ) : null}
            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/admin"}>
                <div className="icon">
                  <RiAdminLine
                    className="mainIcon"
                    style={{ color: "white" }}
                  />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Admin
                </div>
              </Link>
            ) : null}

            {user?.userType === "admin" ? (
              <Link className="link" activeclassname="active" to={"/addnotice"}>
                <div className="icon">
                  <BiNotepad className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Add Notice
                </div>
              </Link>
            ) : null}

            {user?.userType === "teacher" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/teacherprofile"}
              >
                <div className="icon">
                  <SlUserFollow className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Profile
                </div>
              </Link>
            ) : null}
            {user?.userType === "teacher" || user?.userType === "student" ? (
              <Link className="link" activeclassname="active" to={"/doubts"}>
                <div className="icon">
                  <AiOutlineQuestionCircle className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Doubts
                </div>
              </Link>
            ) : null}

            {user?.userType === "teacher" || user?.userType === "student" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/checkreports"}
              >
                <div className="icon">
                  <BsFillBookmarkCheckFill className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Reports
                </div>
              </Link>
            ) : null}

            {user?.userType === "teacher" || user?.userType === "student" ? (
              <a
                href="https://sms-quiz.netlify.app/"
                target="_blank"
                className="link"
                activeclassname="active"
              >
                <div className="icon">
                  <MdQuiz className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Quiz
                </div>
              </a>
            ) : null}

            {user?.userType === "teacher" || user?.userType === "student" ? (
              <a
                href="https://sunny-duckanoo-9006ed.netlify.app/"
                target="_blank"
                className="link"
                activeclassname="active"
              >
                <div className="icon">
                  <BsFillCameraVideoFill className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Video Call
                </div>
              </a>
            ) : null}

            {user?.userType === "teacher" ? (
              <Link
                className="link"
                activeclassname="active"
                to={"/createreport"}
              >
                <div className="icon">
                  <BiDetail className="mainIcon" />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Create Report
                </div>
              </Link>
            ) : null}

            <Link
              className="LogOutPath link"
              onClick={() => {
                dispatch({ type: "AUTH_LOGOUT" });
              }}
              to={"/"}
            >
              <div className="icon">
                <FiLogOut />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Logout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
