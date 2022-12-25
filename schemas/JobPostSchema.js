const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema({
    jobtitle:{
        type:String
    },
    workplacetype:{
        type:String
    },
    joblocation:{
        type:String
    },
    employees_no:{
        type:String
    },
    company:{
        type:String
    },
    jobtype:{
        type:String
    },
    workingdays:[{
        type:String
    }],
    workingtime:{
        type:Number
    },
    startdate:{
        type:String
    },
    duration:{
        type:String
    },
    salary:{
        type:String
    },
    descript:{
        type:String
    },
    hiringperson:{
        type:String
    },
    screeningques:[{
        type:String
    }],
    companypage_id:{
        type:String
    },
    hiringperson_id:{
        type:String
    },
    userId:{
        type:String
    }
})

const JobPost = mongoose.model("Job", JobPostSchema);
module.exports = JobPost;