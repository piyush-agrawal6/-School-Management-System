const express = require("express");
const { AdminModel } = require("../models/admin.model");
const { TeacherModel } = require("../models/teacher.model");
const { StudentModel } = require("../models/student.model");
const { NoticeModel } = require("../models/notice.model");
const { ReportModel } = require("../models/report.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let admins = await AdminModel.find();
    let students = await StudentModel.find();
    let teachers = await TeacherModel.find();
    let reports = await ReportModel.find();
    let notices = await NoticeModel.find();
    
    let data = {
      admin: admins.length,
      student: students.length,
      report: reports.length,
      teacher: teachers.length,
      notice: notices.length,
    };
    res.status(200).send({ data });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong" });
  }
});

module.exports = router;

