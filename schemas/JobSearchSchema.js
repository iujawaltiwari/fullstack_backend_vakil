const mongoose = require('mongoose');

const JobSearchSchema = new mongoose.Schema({
    location:{
        type:String
    }
})

const JobSearch = mongoose.model("JobSearch", JobSearchSchema);
module.exports = JobSearch;