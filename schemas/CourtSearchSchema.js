const mongoose = require("mongoose");

const CourtSearchSchema = new mongoose.Schema({
    name:{
        type:String
    }
})

const CourtSearch = mongoose.model("CourtSearch", CourtSearchSchema);

module.exports = CourtSearch;