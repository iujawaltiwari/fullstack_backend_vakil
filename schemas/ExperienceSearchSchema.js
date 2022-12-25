const mongoose = require("mongoose");

const ExperienceSearchSchema = new mongoose.Schema({
    company:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    }
})

const ExperienceSearch = new mongoose.model('EXPERIENCESEARCH', ExperienceSearchSchema);
module.exports=ExperienceSearch;