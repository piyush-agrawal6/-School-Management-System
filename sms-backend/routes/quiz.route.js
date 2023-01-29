const express = require("express");
const { QuizModel } = require("../models/quiz.model");

const router = express.Router();

router.get("/", async (req, res) => {
  let query = req.body;
  try {
    const quizes = await QuizModel.find(query);
    res.status(200).send(quizes);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong" });
  }
});

router.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const quiz = new QuizModel(payload);
    await quiz.save();
    res.send({ message: "quiz successfully created", quiz });
  } catch (error) {
    res.send(error);
  }
});


module.exports = router;
