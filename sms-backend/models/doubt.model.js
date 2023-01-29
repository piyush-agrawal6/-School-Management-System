const mongoose = require("mongoose");

const doubtSchema = mongoose.Schema({
  class: {
    type: String,
  },

  studentID: {
    type: String
  },


  subject: {
    type: String,
  },


  teacher: {
    type: String,
  },

  details: {
    type: String,
  },

  image: {
    type: String,
  },


  date: {
    type: Date,
  },
});

const DoubtModel = mongoose.model("doubt", doubtSchema);

module.exports = { DoubtModel };
