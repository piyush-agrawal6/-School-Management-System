const express = require("express");
const { NoticeModel } = require("../models/notice.model");

const router = express.Router();

router.get("/", async (req, res) => {
  let query = req.query;
  try {
    const notices = await NoticeModel.find(query);
    res.status(200).send(notices);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong" });
  }
});

router.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const notice = new NoticeModel(payload);
    await notice.save();
    res.send({ message: "Notice successfully created", notice });
  } catch (error) {
    res.send(error);
  }
});



router.delete("/:noticeId", async (req, res) => {
  const id = req.params.noticeId;
  try {
    const notice = await NoticeModel.findByIdAndDelete({ _id: id });
    if (!notice) {
      res.status(404).send({ msg: `Notice with id ${id} not found` });
    }
    res.status(200).send(`Notice with id ${id} deleted`);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Something went wrong, unable to Delete." });
  }
});

module.exports = router;
