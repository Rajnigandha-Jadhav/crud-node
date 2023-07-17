const express = require("express")
const router = express.Router()

const collegeController = require("../controllers/collegeController")
const studentController = require("../controllers/studentController")

router.post("/createCollege", collegeController.createCollege)
router.post("/addStudent", studentController.addStudent)
router.get("/getStudent/:id", studentController.getStudent)
router.get("/getAll", studentController.getAllStudents)

module.exports = router