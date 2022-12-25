const mongoose=require("mongoose");
const experienceSchema=new mongoose.Schema({
 jobtitle: {
     type: String,
     required: false
 },
company: {
    type:String,
    required: false
},
companypage_id:{
    type:String,
    required:false
},
employment_type:{
    type:String,
    required: false
},
city: {
    type: String,
    required: false
},
state: {
    type:String,
    required:false
},
country: {
    type:String,
    required:false
},
startdate: {
    type: String,
    required : false
},
enddate: {
    type: String,
    required: false
},
verified:{
    type:Boolean,
    default:false
},
disapproved:{
    type:Boolean,
    default:false
}

})
const ExperienceSchema=new mongoose.Schema({
    experience:[[experienceSchema]],
    userId:{
        type:String,
    }
})
const Experience=mongoose.model("EXPERIENCE",ExperienceSchema);
module.exports=Experience;