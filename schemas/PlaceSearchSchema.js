const mongoose= require('mongoose');

const PlaceSearchSchema = new mongoose.Schema({
    city:{
        type:String,
        defaullt:""
    },
    state:{
        type:String,
        defaullt:""
    },
    country:{
        type:String,
        defaullt:""
    },
    address:{
        type:String,
        defaullt:""
    },
    zipcode:{
        type:String,
        defaullt:""
    },
})

const PlaceSearch = mongoose.model("PlaceSearch", PlaceSearchSchema);
module.exports =PlaceSearch;