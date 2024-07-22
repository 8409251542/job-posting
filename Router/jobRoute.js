const express=require('express');
const Router=new express.Router();
const jobController=require('../controller/jobcontroller')

Router.get('/jobs',jobController.jobList);

module.exports=Router;