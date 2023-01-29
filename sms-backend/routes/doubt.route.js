const express = require("express");
const { DoubtModel } = require("../models/doubt.model");

const router = express.Router();

router.post("/", async (req, res) => {
  let query = req.body;
  try {
    const doubts = await DoubtModel.find(query);
    res.status(200).send(doubts);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong" });
  }
});

router.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const doubt = new DoubtModel(payload);
    await doubt.save();
    res.send({ message: "doubt successfully created", doubt });
  } catch (error) {
    res.send(error);
  }
});


router.delete("/:doubtId", async (req, res) => {
  const id = req.params.doubtId;
  try {
    const doubt = await DoubtModel.findByIdAndDelete({ _id: id });
    if (!doubt) {
      res.status(404).send({ msg: `doubt with id ${id} not found` });
    }
    res.status(200).send(`doubt with id ${id} deleted`);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong, unable to Delete." });
  }
});

module.exports = router;
