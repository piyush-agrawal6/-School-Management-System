const mongoose = require("mongoose");

const noticetSchema = mongoose.Schema({
 

  details: {
    type: String,
  },

  title: {
    type: String,
  },

 
  date: {
    type: Date,
  },

  
});

const NoticeModel = mongoose.model("notice", noticetSchema);

module.exports = { NoticeModel };
