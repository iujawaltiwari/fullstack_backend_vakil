const mongoose = require('mongoose');

const OfficeAddressSearchSchema = new mongoose.Schema({
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

const OfficeAddressSearch = mongoose.model("OfficeAddressSearch",OfficeAddressSearchSchema);

module.exports=OfficeAddressSearch;