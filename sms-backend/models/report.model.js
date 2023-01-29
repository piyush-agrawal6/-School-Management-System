const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  

  details: {
    type: String,
  },

  name: {
    type: String,
   
  },

  age: {
    type: Number,
    
  },

  email: {
    type: String,
    
  },

  gender: {
    type: String,
    
  },

  mobile: {
    type: Number,
   
  },

  marks: [
    {
      subject: {
        type: String,
      },
      score: {
        type: Number,
      },
      total: {
        type: Number,
      },
    },
  ],

 
  date: {
    type: Date,
  },

  class: {
    type: Number,
  },

});

const ReportModel = mongoose.model("report", reportSchema);

module.exports = { ReportModel };
