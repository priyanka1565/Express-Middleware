const express = require("express");
const techersRoutes = require("./routes/teachers.route");
const studentsRoutes = require("./routes/students.route");


const app = express();

app.get("/", (req, res) => {
  console.log("hello");
});


//middleware function
// app.use((req, res, next) => {
//    console.log("Got Request", req.query);
//   if (!req.query.apiKey) {
//     return res.status(401).send("No API key is provided")
//   }
//   next();
//   // console.log("Got Request",req.query)
// });



//acts as a middleware

 app.use("/teachers", techersRoutes);
app.use("/students", studentsRoutes);


app.listen(7000, async () => {
  console.log("app is running on http://localhost:7000");
});
