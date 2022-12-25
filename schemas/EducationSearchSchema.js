const mongoose = require('mongoose');

const educationSearchSchema = new  mongoose.Schema({
    college:{
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
    },
})

const EducationSearch = mongoose.model('EducationSearch', educationSearchSchema);

module.exports = EducationSearch;