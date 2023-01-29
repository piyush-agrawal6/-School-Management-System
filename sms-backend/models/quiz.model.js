const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
 

  email: {
    type: String,
  },

  score: {
    type: String,
  },
 
});

const QuizModel = mongoose.model("quiz", quizSchema);

module.exports = { QuizModel };
