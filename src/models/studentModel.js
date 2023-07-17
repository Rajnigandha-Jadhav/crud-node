const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const studentSchema = new mongoose.Schema(
    {
        fullName : {
            type : String,
            required : true,
            trim : true
        },
        gender: {
            type: String,
            required: true,
            enum: ["male", "female", "other"],
          },
        collegeName : {
            type: String,
            ref: "College",
            required: true
        },
        email : {
            type : String,
            required : true,
            trim : true
        },
        primaryMobileNo : {
            type : Number,
            required : true,
            trim : true
        },
        secondaryMobileNo : {
            type : Number,
            trim : true
        },
        address: {
            street: { type: String, required: true, trim : true },
            city: { type: String, required: true, trim : true },
            pincode: { type: Number, required: true, trim : true }
        }
    },{ timestamps: true })

module.exports = mongoose.model("Student",studentSchema)