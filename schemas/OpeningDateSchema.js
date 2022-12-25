const mongoose = require("mongoose");

const OpeningDateSchema = new mongoose.Schema({
    date:{
        type:String
    },
    userId:{
        type:String
    }
})

const OpeningDate = mongoose.model("OpeningDate", OpeningDateSchema);


module.exports = OpeningDate;