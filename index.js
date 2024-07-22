const express=require("express");
const Router=require('./Router/jobRoute');
const app=express();
const PORT=8080;

app.use(Router);


app.listen(PORT,()=>{
    console.log("your Port is Successfully :-",PORT);
})