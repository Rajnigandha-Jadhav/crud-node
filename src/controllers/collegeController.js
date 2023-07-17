const collegeModel = require("../models/collegeModel")

const createCollege = async function(req,res){
    try{
        let data = req.body
        const {collegeName,address} = data
        if(Object.keys(data).length == 0){
            return res.status(400).send({status:false, message:"Body should not be empty"})
        }
        if(!collegeName){
            return res.status(400).send({status:false, message:"college name is required"})
        }
        if(!address){
            return res.status(400).send({status:false, message:"address is required"})
        }
        if(address){
            if(Object.keys(address).length < 3){
                return res.status(400).send({status:false,message:"address is incomplete"})
            }
            if(!address.street){
                return res.status(400).send({status:false, message:"street is required"})
            }
            if(!address.city){
                return res.status(400).send({status:false, message:"street is required"})
            }
            if(!address.pincode){
                return res.status(400).send({status:false, message:"street is required"})
            }
        }

        const collegeData = await collegeModel.create(data)
        res.status(201).send({success: true,message: "college added successfully",data: collegeData})

    }catch(error){
        return res.status(500).send({status:false, message:error.message})
    }
}

module.exports = {createCollege}