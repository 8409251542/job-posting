const express=require('express');
const Router=new express.Router();
const jobController=require('../controller/jobcontroller')


Router.get('/jobs',jobController.jobList);
Router.post('/addjob',jobController.addJob);

module.exports=Router;