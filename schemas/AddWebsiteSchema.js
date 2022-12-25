const mongoose = require("mongoose");

const AddWebsiteSchema = new mongoose.Schema({
    link:{
        type:String
    },
    userId:{
        type:String
    }
})

const AddWebsite = mongoose.model("AddWebsite", AddWebsiteSchema);

module.exports = AddWebsite;