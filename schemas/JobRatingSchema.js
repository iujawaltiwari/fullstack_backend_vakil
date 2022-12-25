const mongoose = require("mongoose");

const JobRatingSchema = new mongoose.Schema({
    rating:[{
        rated:{
            type:String,
        },
        rated_by:{
            type:String
        }
    }],
    userId:{
        type:String
    }
})

const JobRating = mongoose.model("JobRating", JobRatingSchema);
module.exports=JobRating;