const mongoose=require("mongoose");
const educationSchema=new mongoose.Schema({
    collegename: String,
    city: String,
    state:String,
    country:String,
    degreetype:String,
    stream: String,
    startdate:String,
    enddate: String
})
const EducationSchema=new mongoose.Schema({
    education:[[educationSchema]],
    userId:{
        type:'String'
    }
})
const Education=mongoose.model("EDUCATION",EducationSchema);
module.exports=Education;