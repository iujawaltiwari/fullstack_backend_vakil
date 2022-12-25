const mongoose = require("mongoose");

const LanguageSearchSchema = new mongoose.Schema({
    name:[{
        type:String,
        required:false
    }],
    userId:{
        type:String
    }
})

const LanguageSearch = mongoose.model('LanguageSearch', LanguageSearchSchema);

module.exports=LanguageSearch;