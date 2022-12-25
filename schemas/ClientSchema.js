const mongoose = require('mongoose');

const clientschema = new mongoose.Schema({
    profile:{
        image_id: String,
        image_url: String
    },
    name:{
        type: String
    },
    company_position: {
        type: String
    },
    company_name:{
        type: String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    email:{
        type:String
    }
})

const ClientSchema = new mongoose.Schema({
    client: [[clientschema]],
    userId:{
        type:String
    }
})

const Client = mongoose.model("CLIENT",ClientSchema);
module.exports=Client;