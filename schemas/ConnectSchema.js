const mongoose=require("mongoose");

const ConnectSchema = new mongoose.Schema({
    connections:[{
        type:String,
        default:[]
    }],
    requests:[{
        type:String,
        default:[]
    }],
    requests_sent:[{
        type:String,
        default:[]
    }],
    unconnected:[{
        type:String,
        default:[]
    }],
    userId:{
        type:String
    }
})

const Connect = mongoose.model("Connect", ConnectSchema);
module.exports=Connect;