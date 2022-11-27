const {Router} = require("express")

const teachers = Router();

teachers.post("/create", (req, res) => {
  res.send("create");
});

//put method
teachers.put("/update", (req, res) => {
  res.send("update");
});
//delete method
teachers.delete("/delete", (req, res) => {
  res.send("delete")
})
//get method
teachers.get("/get", (req, res) => {
  res.send("get");
});

module.exports = teachers;