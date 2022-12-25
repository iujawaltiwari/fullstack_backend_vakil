const mongoose = require("mongoose");

const OfficeAddressSchema = new mongoose.Schema({
    address:{
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
    zipcode:{
        type:String
    },
    userId:{
        type:String
    }
})

const OfficeAdress = mongoose.model("OfficeAddress", OfficeAddressSchema);
module.exports=OfficeAdress;