const express = require("express")
const {connection} = require("./Config/db")
require("dotenv").config();
const cors = require("cors");


const adminRouter = require('./routes/admin.route')
const teacherRouter = require('./routes/teacher.route')
const studentRouter = require('./routes/student.route');
const reportRouter = require('./routes/reports.route');
const doubtRouter = require('./routes/doubt.route');
const noticeRouter = require('./routes/notice.route')
const schoolRouter = require("./routes/school.route");
const quizRouter = require('./routes/quiz.route')


const app = express()

app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Homepage")
})

app.use("/admin", adminRouter);
app.use('/teachers', teacherRouter);
app.use('/students', studentRouter);
app.use("/reports", reportRouter);
app.use("/doubts", doubtRouter);
app.use('/notices', noticeRouter)
app.use('/schools', schoolRouter)
app.use('/quiz', quizRouter)




 


    app.listen(process.env.port, async ()=>{
        try {
            await connection
            console.log("Connected to DB");
        } catch (error) {
            console.log("Unable to connect to DB");
        console.log(error);
        }
        console.log(`Listening at port ${process.env.port}`);
    } )



