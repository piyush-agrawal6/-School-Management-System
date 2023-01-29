import { Table } from "antd";
import React from "react";
import { RiEmpathizeLine } from "react-icons/ri";
import { BiNotepad, BiBus } from "react-icons/bi";
import { FaChalkboardTeacher, FaUserAlt } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllData,
  GetNotices,
} from "../../../../Redux/Datas/action";

const FrontPage = () => {
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Details", dataIndex: "details", key: "details" },
    { title: "Date", dataIndex: "date", key: "date" },
  ];

  const notices = useSelector((store) => store.data.notices);
  const {
    dashboard: { data },
  } = useSelector((store) => store.data);

  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetNotices());
    dispatch(GetAllData());
  }, [dispatch]);

  return (
    <div className="container">
      <Sidebar />
      <div className="AfterSideBar">
        <h1 style={{ color: "rgb(184 191 234)" }}>Overview</h1>
        <div className="maindiv">
          <div className="one commondiv">
            <div>
              <h1>{data?.teacher}</h1>
              <p>Teachers</p>
            </div>
            <FaChalkboardTeacher className="overviewIcon" />
          </div>
          <div className="two commondiv">
            {" "}
            <div>
              <h1>{data?.student}</h1>
              <p>Students</p>
            </div>
            <FaUserAlt className="overviewIcon" />
          </div>
          <div className="three commondiv">
            <div>
              <h1>50</h1>
              <p>Staffs</p>
            </div>
            <RiEmpathizeLine className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.admin}</h1>
              <p>Admins</p>
            </div>
            <RiAdminLine className="overviewIcon" />
          </div>
          <div className="four commondiv">
            {" "}
            <div>
              <h1>25</h1>
              <p>Class rooms</p>
            </div>
            <SiGoogleclassroom className="overviewIcon" />
          </div>

          <div className="five commondiv">
            {" "}
            <div>
              <h1>10</h1>
              <p>School bus</p>
            </div>
            <BiBus className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.notice}</h1>
              <p>Notices</p>
            </div>
            <BiNotepad className="overviewIcon" />
          </div>
          <div className="six commondiv">
            {" "}
            <div>
              <h1>{data?.report}</h1>
              <p>Reports</p>
            </div>
            <MdPayment className="overviewIcon" />
          </div>
        </div>
        {/* ************************************* */}
        <div className="patientDetails">
          <h1>School notices</h1>
          <div className="patientBox">
            {notices ? <Table columns={columns} dataSource={notices} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
