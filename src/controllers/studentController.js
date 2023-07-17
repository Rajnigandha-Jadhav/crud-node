const studentModel = require("../models/studentModel");
const collegeModel = require("../models/collegeModel");

const addStudent = async function (req, res) {
  try {
    let data = req.body;
    const {
      fullName,
      gender,
      collegeName,
      email,
      primaryMobileNo,
      secondaryMobileNo,
      address,
    } = data;

    if (Object.keys(data).length == 0) {
      return res
        .status(400)
        .send({ status: false, message: "Body should not be empty" });
    }
    if (!fullName) {
      return res
        .status(400)
        .send({ status: false, message: "fullName is required" });
    }
    if (!gender) {
      return res
        .status(400)
        .send({ status: false, message: "gender is required" });
    }
    if (!collegeName) {
      return res
        .status(400)
        .send({ status: false, message: "college name is required" });
    }
    const findCollege = await collegeModel.findOne({
      collegeName: collegeName,
    });
    if (!findCollege) {
      return res
        .status(404)
        .send({ status: false, message: "This college does not exist" });
    }

    if (!email) {
      return res
        .status(400)
        .send({ status: false, message: "email is required" });
    }
    if (!primaryMobileNo) {
      return res
        .status(400)
        .send({ status: false, message: "primaryMobileNo is required" });
    }
    if (!address) {
      return res
        .status(400)
        .send({ status: false, message: "address is required" });
    }
    if (address) {
      if (Object.keys(address).length < 3) {
        return res
          .status(400)
          .send({ status: false, message: "address is incomplete" });
      }

      if (!address.street) {
        return res
          .status(400)
          .send({ status: false, message: "street is required" });
      }
      if (!address.city) {
        return res
          .status(400)
          .send({ status: false, message: "city is required" });
      }
      // if (!regexName.test(address.city)) {
      //     return res.status(400).send({ status: false, message: "shipping city is in incorrect format" })
      // }

      if (!address.pincode) {
        return res
          .status(400)
          .send({ status: false, message: "pincode is required" });
      }

      // if (!regexPincode.test(address.pincode)) {
      //     return res.status(400).send({ status: false, message: "shipping Pincode is in incorrect format" })
    }
    const studentData = await studentModel.create(data);

    res
      .status(201)
      .send({
        success: true,
        message: "student added successfully",
        data: studentData,
      });
  } catch (error) {
    return res.status(500).send({ status: false, error: error.message });
  }
};

const getStudent = async function (req, res) {
  try {
    const studentId = req.params.id;
    const student = await studentModel.findOne({ _id: studentId });
    if (!student) {
      return res
        .status(404)
        .send({ status: false, message: "student doesn't exist" });
    }
    return res
      .status(200)
      .send({
        success: true,
        message: "student data fetched successfully",
        data: student,
      });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getAllStudents = async function (req, res) {
  try {
    const students = await studentModel.find();
    
    const college = students.map(ele => ele.collegeName);
    const name = students.map(ele => ele.fullName)
    const collegeInfo = await collegeModel.find();
    const collegeDetails = collegeInfo.map(ele => ele.college)
    let Obj = {name:name,colleges:collegeDetails}
   

    return res
      .status(200)
      .send({
        status: true,
        message: "all students fetched successfully",
        data: Obj,
      });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addStudent, getStudent, getAllStudents };
