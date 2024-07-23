const mongoose=require("mongoose");

const jobDetailsSchema=mongoose.Schema(
    {
        jobTitle:{
            type:String,
            required:true,
        },
        company:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,

        },
        salary:{
            type:String,
            required:true,
        }
    }
)
const JobDetails=mongoose.model("jobs",jobDetailsSchema);
module.exports=JobDetails;