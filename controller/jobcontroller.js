const jobSchema=require("../model/jobsSchema")
const jobList =async (req, res) => {
    try {
        const jobList=await jobSchema.find();
        res.json({
            success:true,
            message:"Job Added Successfully!",
            results:jobList
        })
    } catch (error) {
        console.log("error Found:",error);
    }
}

const addJob = async (req,res)=>{
    try {
        //console.log(req.body);
        await jobSchema.create(req.body);
        res.json({
            success:true,
            message:"Job Added Successfully!"
        })
    } catch (error) {
        console.log("Some Error found while adding the job!",error);
    }
}

const jobController={
    jobList,
    addJob
}

module.exports=jobController;