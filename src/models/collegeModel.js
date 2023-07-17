const mongoose = require("mongoose")

const collegeSchema = new mongoose.Schema(
    {
        collegeName : {
            type: String,
            required : true,
            trim : true
         },
         address: {
            street: { type: String, required: true, trim : true },
            city: { type: String, required: true, trim : true },
            pincode: { type: Number, required: true, trim : true }
        }
    }
)

module.exports = mongoose.model("College",collegeSchema)