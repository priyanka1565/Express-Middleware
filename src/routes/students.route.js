
const { Router } = require("express");

const students = Router();

//for students
//post method
students.post("/post", (req, res) => {
  res.send("create");
});

//put method
students.put("/update", (req, res) => {
  res.send("update");
});
//delete method
students.delete("/delete", (req, res) => {
  res.send("delete");
});
//get method
students.get("/get", (req, res) => {
  res.send("get");
});
module.exports = students;