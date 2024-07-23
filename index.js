const express=require("express");
const mongoose=require('mongoose');
const Router=require('./Router/jobRoute');
const app=express();
const PORT=8080;
mongoose.connect('mongodb+srv://raviyoof:HqfXO2CNyWliJMh1@cluster0.gvbotqu.mongodb.net')
    .then(() => console.log('Connected!'))
    .catch((err)=>console.log("Some Errore while connecting the data base!!!/n",err));

app.use(express.json());
app.use(Router);

app.listen(PORT,()=>{
    console.log("your Port is Successfully :-",PORT);
})