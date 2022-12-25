const mongoose = require("mongoose");


const ServiceCitySearchSchema = new mongoose.Schema({
    city_name:[{
        String
   }],
    userId:{
        type:String
    }
});


const ServiceCitySearch = mongoose.model("ServiceCitySearch" , ServiceCitySearchSchema);

module.exports = ServiceCitySearch;