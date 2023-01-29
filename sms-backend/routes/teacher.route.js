const express = require("express");
const { TeacherModel } = require("../models/teacher.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const teachers = await TeacherModel.find();
    res.status(200).send(teachers);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong" });
  }
});

router.post("/register", async (req, res) => {
  const { email } = req.body;
  try {
    const teacher = await TeacherModel.findOne({ email });
    if (teacher) {
      return res.send({
        message: "Teacher already exists",
      });
    }
    let value = new TeacherModel(req.body);
    await value.save();
    const data = await TeacherModel.findOne({ email });
    return res.send({ data, message: "Registered" });
  } catch (error) {
    res.send({ message: "error" });
  }
});

router.post("/login", async (req, res) => {
  const { docID, password } = req.body;
  try {
    const teacher = await TeacherModel.findOne({ docID, password });

    if (teacher) {
      const token = jwt.sign({ foo: "bar" }, process.env.key, {
        expiresIn: "24h",
      });
      res.send({ message: "Successful", user: teacher, token: token });
    } else {
      res.send({ message: "Wrong credentials" });
    }
  } catch (error) {
    console.log({ message: "Error" });
    console.log(error);
  }
});

router.patch("/:teacherId", async (req, res) => {
  const id = req.params.teacherId;
  const payload = req.body;
  try {
    await TeacherModel.findByIdAndUpdate({ _id: id }, payload);
    const teacher = await TeacherModel.findById(id);
    if (!teacher) {
      return res
        .status(404)
        .send({ message: `Teacher with id ${id} not found` });
    }
    res.status(200).send({ message: `Teacher Updated`, user: teacher });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong, unable to Update." });
  }
});

router.delete("/:teacherId", async (req, res) => {
  const id = req.params.teacherId;
  try {
    const teacher = await TeacherModel.findByIdAndDelete({ _id: id });
    if (!teacher) {
      res.status(404).send({ msg: `Teacher with id ${id} not found` });
    }
    res.status(200).send(`Teacher with id ${id} deleted`);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong, unable to Delete." });
  }
});

module.exports = router;
