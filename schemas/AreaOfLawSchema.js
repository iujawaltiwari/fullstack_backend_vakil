const mongoose = require('mongoose');

const AreaOfLawsSchema = new mongoose.Schema({
    areaoflaws:[{type:String}],
    userId:{
        type:String
    }
})

const AreaOfLaw = mongoose.model("AreaOfLaw",AreaOfLawsSchema);
module.exports = AreaOfLaw;